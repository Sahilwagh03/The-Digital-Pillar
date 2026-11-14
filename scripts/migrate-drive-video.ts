/**
 * Local Private Google Drive to ImageKit Video Migration Utility
 *
 * Usage:
 *   npx tsx scripts/migrate-drive-video.ts <DRIVE_URL_OR_ID> [options]
 *
 * Options:
 *   --name "Custom Title"     Set custom title for registry
 *   --key "registryKey"       Set camelCase object key in config/media/videos.ts
 *   --time 1.5                Thumbnail capture timestamp in seconds (default: 1.5)
 *   --compress                Compress video to web-optimized 1080p/720p MP4 before upload
 *   --folder "/folder"        Target folder in ImageKit (default: /the-digital-pillar)
 *
 * Examples:
 *   npx tsx scripts/migrate-drive-video.ts https://drive.google.com/file/d/1AbC.../view --name "Project Demo"
 *   npm run media:migrate -- 1AbC... --compress
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { execFile } from "child_process";
import { promisify } from "util";
import dotenv from "dotenv";
import { google } from "googleapis";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ImageKit = require("imagekit");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ffmpegPath: string | null = require("ffmpeg-static");

const execFileAsync = promisify(execFile);

// Load local environment files
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

export interface MigrationOptions {
  driveInput: string;
  customTitle?: string;
  customKey?: string;
  thumbnailTimeSeconds: number;
  compress: boolean;
  folder: string;
}

/**
 * Extracts Google Drive file ID from supported URL patterns or raw string
 */
export function extractDriveFileId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();

  // Pattern 1: https://drive.google.com/file/d/{id}/view
  const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) return fileDMatch[1];

  // Pattern 2: https://drive.google.com/open?id={id} or /uc?id={id}
  const idParamMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch) return idParamMatch[1];

  // Pattern 3: https://drive.google.com/drive/folders/{id}
  const folderMatch = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) return folderMatch[1];

  // Pattern 4: Raw file ID (Google Drive IDs are typically alphanumeric, 25-45 chars)
  if (/^[a-zA-Z0-9_-]{20,50}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

/**
 * Initializes Google Drive API client using Service Account or OAuth2
 */
async function getAuthenticatedDriveClient() {
  const serviceAccountPath =
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || "./google-service-account.json";

  const resolvedServiceAccount = path.resolve(process.cwd(), serviceAccountPath);

  if (fs.existsSync(resolvedServiceAccount)) {
    console.log(`[Google Auth] Authenticating with Service Account: ${path.basename(resolvedServiceAccount)}`);
    const auth = new google.auth.GoogleAuth({
      keyFile: resolvedServiceAccount,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });
    return google.drive({ version: "v3", auth });
  }

  // Fallback to OAuth2 credentials
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (clientId && clientSecret && refreshToken) {
    console.log("[Google Auth] Authenticating with Google OAuth2 Refresh Token...");
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    return google.drive({ version: "v3", auth: oauth2Client });
  }

  throw new Error(
    "\n[Auth Error] No Google Drive credentials found!\n\n" +
      "Please configure one of the following methods:\n" +
      "  1. (Recommended) Create a Google Cloud Service Account, save its JSON key as:\n" +
      `     '${serviceAccountPath}', and share the private Drive file with the Service Account email as Viewer.\n\n` +
      "  2. Provide GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN in your .env file.\n"
  );
}

/**
 * Initializes ImageKit SDK
 */
function getImageKitClient() {
  const publicKey =
    process.env.IMAGEKIT_PUBLIC_KEY || process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint =
    process.env.IMAGEKIT_URL_ENDPOINT || process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    throw new Error(
      "\n[Auth Error] ImageKit credentials missing in environment!\n" +
        "Please define in your .env or .env.local:\n" +
        "  IMAGEKIT_PUBLIC_KEY=your_key\n" +
        "  IMAGEKIT_PRIVATE_KEY=your_private_key\n" +
        "  IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id\n"
    );
  }

  return new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });
}

/**
 * Prompts user interactively in the terminal
 */
function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

/**
 * Formats bytes to human-readable string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

interface ProcessSingleVideoParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drive: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagekit: any;
  fileId: string;
  fileName: string;
  fileSize: number;
  customTitle?: string;
  customKey?: string;
  parentFolderName?: string;
  relativePath?: string;
  existingKeys?: Set<string>;
  thumbnailTime: number;
  compress: boolean;
  folder: string;
  tmpDir: string;
}

interface ProcessSingleVideoResult {
  registryKey: string;
  displayTitle: string;
  uploadedVideoUrl: string;
  uploadedThumbnailUrl: string;
  registrySnippet: string;
}

interface ScannedVideo {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  parentFolderName: string;
  relativePath: string;
}

/**
 * Reads existing TypeScript keys from config/media/videos.ts to prevent key collisions
 */
function getExistingRegistryKeys(): Set<string> {
  const configPath = path.resolve(process.cwd(), "src/config/media/videos.ts");
  const keys = new Set<string>();
  if (fs.existsSync(configPath)) {
    const content = fs.readFileSync(configPath, "utf-8");
    const matches = content.matchAll(/^\s+([a-zA-Z0-9_-]+):\s*\{/gm);
    for (const m of matches) {
      keys.add(m[1]);
    }
  }
  return keys;
}

/**
 * Generates a unique, collision-free camelCase registry key
 */
function generateUniqueRegistryKey(baseKey: string, existingKeys?: Set<string>): string {
  if (!existingKeys) return baseKey;
  let key = baseKey;
  let counter = 1;
  while (existingKeys.has(key)) {
    key = `${baseKey}${++counter}`;
  }
  existingKeys.add(key);
  return key;
}

/**
 * Recursively scans Google Drive folders, collecting all video files and skipping specified folders
 */
async function scanDriveFolderRecursively(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drive: any,
  folderId: string,
  folderName: string,
  skipFolders: string[] = [],
  currentPath: string = "",
  visited: Set<string> = new Set()
): Promise<ScannedVideo[]> {
  if (visited.has(folderId)) return [];
  visited.add(folderId);

  const results: ScannedVideo[] = [];
  let pageToken: string | undefined = undefined;

  do {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listRes: any = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: "nextPageToken, files(id, name, mimeType, size)",
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
      pageSize: 100,
      pageToken,
    });

    const items = listRes.data.files || [];

    for (const item of items) {
      if (item.mimeType === "application/vnd.google-apps.folder") {
        const subName = item.name || "Untitled Folder";
        const isSkipped = skipFolders.some(
          (skip) => skip && subName.toLowerCase().includes(skip.toLowerCase())
        );

        const displaySubPath = currentPath ? `${currentPath}/${subName}` : subName;

        if (isSkipped) {
          console.log(`   ⏭️  [Skipping Folder] "${displaySubPath}" (matches skip rule: "${skipFolders.join(", ")}")`);
          continue;
        }

        console.log(`   📁 Scanning subfolder: "${displaySubPath}"...`);
        const subResults = await scanDriveFolderRecursively(
          drive,
          item.id!,
          subName,
          skipFolders,
          displaySubPath,
          visited
        );
        results.push(...subResults);
      } else {
        const isVideo =
          (item.mimeType && item.mimeType.startsWith("video/")) ||
          /\.(mp4|mov|webm|m4v|mkv|avi)$/i.test(item.name || "");

        if (isVideo) {
          const displayPath = currentPath ? `${currentPath}/${item.name}` : (item.name || item.id);
          results.push({
            id: item.id!,
            name: item.name || `drive-video-${item.id}.mp4`,
            size: parseInt(item.size || "0", 10),
            mimeType: item.mimeType || "video/mp4",
            parentFolderName: folderName,
            relativePath: displayPath,
          });
        }
      }
    }

    pageToken = listRes.data.nextPageToken || undefined;
  } while (pageToken);

  return results;
}

async function processSingleVideo(
  params: ProcessSingleVideoParams
): Promise<ProcessSingleVideoResult | null> {
  const {
    drive,
    imagekit,
    fileId,
    fileName,
    fileSize,
    customTitle,
    customKey,
    parentFolderName,
    existingKeys,
    thumbnailTime,
    compress,
    folder,
    tmpDir,
  } = params;

  // 1. Download private video to temporary working directory
  const rawVideoPath = path.join(tmpDir, `raw-${fileId}.mp4`);
  console.log(`\n[Download] Streaming private file from Google Drive: ${fileName}...`);

  const destStream = fs.createWriteStream(rawVideoPath);
  let downloadedBytes = 0;
  let lastLoggedPercent = -1;

  const downloadRes = await drive.files.get(
    { fileId, alt: "media", supportsAllDrives: true },
    { responseType: "stream" }
  );

  await new Promise<void>((resolve, reject) => {
    downloadRes.data
      .on("data", (chunk: Buffer) => {
        downloadedBytes += chunk.length;
        if (fileSize > 0) {
          const percent = Math.floor((downloadedBytes / fileSize) * 100);
          if (percent !== lastLoggedPercent && percent % 10 === 0) {
            process.stdout.write(
              `  Progress: ${percent}% (${formatBytes(downloadedBytes)} / ${formatBytes(fileSize)})\r`
            );
            lastLoggedPercent = percent;
          }
        }
      })
      .on("error", (err: Error) => {
        reject(new Error(`Drive download stream failed: ${err.message}`));
      })
      .pipe(destStream)
      .on("finish", () => {
        console.log(`\n  Download complete: ${formatBytes(downloadedBytes)}`);
        resolve();
      })
      .on("error", (err: Error) => {
        reject(new Error(`File write failed: ${err.message}`));
      });
  });

  let finalVideoPath = rawVideoPath;

  // 2. Optional FFmpeg Web Compression
  if (compress && ffmpegPath) {
    const compressedVideoPath = path.join(tmpDir, `compressed-${fileId}.mp4`);
    console.log("\n[FFmpeg] Compressing video to web-optimized MP4 (H.264, 720p/1080p, faststart)...");
    try {
      await execFileAsync(ffmpegPath, [
        "-y",
        "-i",
        rawVideoPath,
        "-c:v",
        "libx264",
        "-crf",
        "26",
        "-preset",
        "fast",
        "-vf",
        "scale='min(1080,iw)':-2",
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-movflags",
        "+faststart",
        compressedVideoPath,
      ]);

      const compressedSize = fs.statSync(compressedVideoPath).size;
      console.log(
        `  Compressed Size: ${formatBytes(compressedSize)} (Saved ${(
          100 -
          (compressedSize / (fileSize || 1)) * 100
        ).toFixed(1)}%)`
      );
      finalVideoPath = compressedVideoPath;
    } catch (err: unknown) {
      console.warn(
        `[Warning] Compression pass encountered an error, falling back to original: ${(err as Error).message}`
      );
      finalVideoPath = rawVideoPath;
    }
  }

  // 3. Generate Thumbnail with FFmpeg
  const thumbPath = path.join(tmpDir, `thumb-${fileId}.jpg`);
  let hasCustomThumb = false;

  if (ffmpegPath) {
    console.log(`\n[FFmpeg] Extracting thumbnail frame at ${thumbnailTime}s...`);
    try {
      await execFileAsync(ffmpegPath, [
        "-y",
        "-ss",
        thumbnailTime.toString(),
        "-i",
        finalVideoPath,
        "-vframes",
        "1",
        "-q:v",
        "2",
        thumbPath,
      ]);
      if (fs.existsSync(thumbPath)) {
        console.log(`  Thumbnail generated: ${formatBytes(fs.statSync(thumbPath).size)}`);
        hasCustomThumb = true;
      }
    } catch (thumbErr: unknown) {
      console.warn(`[Warning] FFmpeg thumbnail extraction failed: ${(thumbErr as Error).message}`);
    }
  }

  // 4. Upload Assets to ImageKit
  const sanitizedBase = fileName
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const videoFileName = `${sanitizedBase}-${Date.now().toString().slice(-4)}.mp4`;
  const thumbFileName = `${sanitizedBase}-thumb.jpg`;

  const folderTag = parentFolderName
    ? parentFolderName.toLowerCase().replace(/[^a-z0-9_-]/g, "-")
    : "";

  // Upload Thumbnail
  let uploadedThumbnailUrl = "";
  if (hasCustomThumb) {
    console.log(`\n[ImageKit Upload] Uploading thumbnail to ${folder}/thumbnails...`);
    const thumbBuffer = fs.readFileSync(thumbPath);
    const thumbUploadRes = await imagekit.upload({
      file: thumbBuffer,
      fileName: thumbFileName,
      folder: `${folder}/thumbnails`,
      tags: ["drive-migration", "thumbnail", sanitizedBase, ...(folderTag ? [folderTag] : [])],
    });
    uploadedThumbnailUrl = thumbUploadRes.url;
    console.log(`  Thumbnail URL: ${uploadedThumbnailUrl}`);
  }

  // Upload Video
  console.log(`\n[ImageKit Upload] Uploading video to ${folder}/videos...`);
  const videoBuffer = fs.readFileSync(finalVideoPath);
  const videoUploadRes = await imagekit.upload({
    file: videoBuffer,
    fileName: videoFileName,
    folder: `${folder}/videos`,
    tags: ["drive-migration", "video", sanitizedBase, ...(folderTag ? [folderTag] : [])],
  });

  const uploadedVideoUrl = videoUploadRes.url;
  console.log(`  Video URL: ${uploadedVideoUrl}`);

  if (!uploadedThumbnailUrl) {
    uploadedThumbnailUrl = `${uploadedVideoUrl}/ik-thumbnail.jpg?tr=so-1,f-auto`;
    console.log(`  Defaulting to ImageKit CDN thumbnail: ${uploadedThumbnailUrl}`);
  }

  // 5. Output Result & Registry Entry
  let baseKey =
    customKey ||
    sanitizedBase.replace(/-([a-z])/g, (_, g) => g.toUpperCase()).replace(/[^a-zA-Z0-9]/g, "");

  // Ensure key starts with a valid JavaScript identifier character (not a number)
  if (/^[0-9]/.test(baseKey)) {
    const prefix = folderTag ? folderTag.replace(/[^a-zA-Z]/g, "") : "video";
    baseKey = `${prefix || "video"}${baseKey}`;
  }

  const registryKey = generateUniqueRegistryKey(baseKey, existingKeys);

  const displayTitle =
    customTitle ||
    (parentFolderName && parentFolderName.toLowerCase() !== "videos"
      ? `${parentFolderName} - ${fileName
          .replace(/\.[^/.]+$/, "")
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}`
      : fileName
          .replace(/\.[^/.]+$/, "")
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()));

  const registrySnippet = `
  ${registryKey}: {
    id: "${registryKey}",
    title: "${displayTitle}",
    videoUrl: "${uploadedVideoUrl}",
    thumbnailUrl: "${uploadedThumbnailUrl}",
    aspectRatio: "9:16",
    tags: ["drive-migrated"${folderTag ? `, "${folderTag}"` : ""}],
  },`;

  // Clean up temporary local files for this video to save disk space
  try {
    if (fs.existsSync(rawVideoPath)) fs.unlinkSync(rawVideoPath);
    if (finalVideoPath !== rawVideoPath && fs.existsSync(finalVideoPath)) fs.unlinkSync(finalVideoPath);
    if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
  } catch {
    // Ignore cleanup error
  }

  return {
    registryKey,
    displayTitle,
    uploadedVideoUrl,
    uploadedThumbnailUrl,
    registrySnippet,
  };
}

/**
 * Main Migration Controller
 */
async function runMigration() {
  console.log("\n=======================================================");
  console.log("  The Digital Pillar - Private Google Drive Migration");
  console.log("=======================================================\n");

  const args = process.argv.slice(2);
  let driveInput = "";
  let customTitle: string | undefined;
  let customKey: string | undefined;
  let thumbnailTime = 1.5;
  let compress = false;
  let folder = process.env.IMAGEKIT_DEFAULT_FOLDER || "/the-digital-pillar";
  let skipFolders: string[] = ["resorts"]; // Default skips "resorts" as requested

  // Parse CLI flags
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--name" && args[i + 1]) {
      customTitle = args[++i];
    } else if (arg === "--key" && args[i + 1]) {
      customKey = args[++i];
    } else if (arg === "--time" && args[i + 1]) {
      thumbnailTime = parseFloat(args[++i]) || 1.5;
    } else if (arg === "--compress") {
      compress = true;
    } else if (arg === "--folder" && args[i + 1]) {
      folder = args[++i];
    } else if ((arg === "--skip" || arg === "--skip-folder") && args[i + 1]) {
      const customSkips = args[++i].split(",").map((s) => s.trim().toLowerCase());
      skipFolders = Array.from(new Set([...skipFolders, ...customSkips]));
    } else if (!arg.startsWith("--") && !driveInput) {
      driveInput = arg;
    }
  }

  // If no URL provided as argument, prompt user
  if (!driveInput) {
    driveInput = await askQuestion("Enter Google Drive URL or File ID: ");
  }

  const fileId = extractDriveFileId(driveInput);
  if (!fileId) {
    console.error(`[Error] Could not extract valid Google Drive File ID from: "${driveInput}"`);
    process.exit(1);
  }

  console.log(`[Drive Target] Identified File ID: ${fileId}`);
  console.log(`[Skip Rule] Configured folders to skip: ${skipFolders.map((s) => `"${s}"`).join(", ")}`);

  // Setup working directory for scratch downloads
  const tmpDir = path.resolve(process.cwd(), ".tmp", `migration-${Date.now()}`);
  fs.mkdirSync(tmpDir, { recursive: true });

  const existingKeys = getExistingRegistryKeys();
  const configPath = path.resolve(process.cwd(), "src/config/media/videos.ts");
  const existingConfigContent = fs.existsSync(configPath) ? fs.readFileSync(configPath, "utf-8") : "";

  try {
    // 1. Authenticate Drive & ImageKit
    const drive = await getAuthenticatedDriveClient();
    const imagekit = getImageKitClient();

    // 2. Fetch Target Metadata from Drive with friendly error handling
    console.log("[Drive Query] Inspecting Google Drive target...");
    let metaRes;
    try {
      metaRes = await drive.files.get({
        fileId,
        fields: "id, name, mimeType, size, videoMediaMetadata",
        supportsAllDrives: true,
      });
    } catch (err: unknown) {
      const gErr = err as { message?: string; code?: number };
      if (gErr.message?.includes("File not found") || gErr.code === 404) {
        console.error(`\n❌ [Google Drive Access Error] Folder/File "${fileId}" was not found or is inaccessible!`);
        console.error("\n👉 You need to share this folder with your Service Account email:");
        console.error("   media-migrator@excellent-range-286717.iam.gserviceaccount.com\n");
        console.error("Steps:");
        console.error(`  1. Open: https://drive.google.com/drive/folders/${fileId}`);
        console.error("  2. Click 'Share' (top right).");
        console.error("  3. Paste: media-migrator@excellent-range-286717.iam.gserviceaccount.com");
        console.error("  4. Set role to 'Viewer' and click 'Send'.");
        console.error("  5. Re-run this migration command.\n");
        process.exit(1);
      }
      throw err;
    }

    const isFolder =
      metaRes.data.mimeType === "application/vnd.google-apps.folder" ||
      driveInput.includes("/folders/");

    if (isFolder) {
      const rootFolderName = metaRes.data.name || fileId;
      console.log(`\n📁 Identified Google Drive Folder: "${rootFolderName}"`);
      console.log(`[Drive Query] Recursively scanning subfolders for video files (skipping: ${skipFolders.join(", ")})...`);

      const scannedVideos = await scanDriveFolderRecursively(
        drive,
        fileId,
        rootFolderName,
        skipFolders
      );

      if (scannedVideos.length === 0) {
        console.log("\n⚠️  No video files found to migrate inside this folder hierarchy.");
        console.log("   (Either all subfolders were skipped or they contained no video files).");
        return;
      }

      console.log(`\n✅ Found ${scannedVideos.length} total video(s) across subfolders:\n`);
      scannedVideos.forEach((v, idx) => {
        const isAlreadyInConfig = existingConfigContent.includes(v.id);
        console.log(
          `   ${idx + 1}. [${v.parentFolderName}] ${v.name} (${formatBytes(v.size)}) ${
            isAlreadyInConfig ? "⚡ (Already in videos.ts)" : ""
          }`
        );
      });

      if (!compress) {
        const answer = await askQuestion(
          "\nWould you like to compress videos to web-optimized 1080p/720p MP4 before upload? (Y/n): "
        );
        if (answer.toLowerCase() !== "n") {
          compress = true;
        }
      }

      const allRegistrySnippets: string[] = [];
      let migratedCount = 0;

      for (let idx = 0; idx < scannedVideos.length; idx++) {
        const video = scannedVideos[idx];

        // Skip if already in videos.ts
        if (existingConfigContent.includes(video.id)) {
          console.log(`\n⏭️  Skipping [${idx + 1}/${scannedVideos.length}]: "${video.name}" (already in videos.ts)`);
          continue;
        }

        console.log(`\n=======================================================`);
        console.log(`  Processing [${idx + 1}/${scannedVideos.length}]: ${video.name} (from "${video.parentFolderName}")`);
        console.log(`=======================================================`);

        try {
          const result = await processSingleVideo({
            drive,
            imagekit,
            fileId: video.id,
            fileName: video.name,
            fileSize: video.size,
            parentFolderName: video.parentFolderName,
            relativePath: video.relativePath,
            existingKeys,
            thumbnailTime,
            compress,
            folder,
            tmpDir,
          });

          if (result) {
            allRegistrySnippets.push(result.registrySnippet);
            migratedCount++;
          }
        } catch (videoErr: unknown) {
          const vErr = videoErr as Error;
          console.error(`\n❌ Error migrating "${video.name}":`, vErr?.message || String(videoErr));
          console.log("   Continuing with next video...");
        }
      }

      console.log("\n=======================================================");
      console.log(`  MIGRATION FINISHED! (${migratedCount} videos uploaded) 🎉`);
      console.log("=======================================================");

      if (allRegistrySnippets.length > 0) {
        console.log("\nRegistry entries ready for 'src/config/media/videos.ts':\n");
        console.log(allRegistrySnippets.join("\n"));

        const appendAnswer = await askQuestion(
          "\nWould you like to automatically append these entries to 'src/config/media/videos.ts'? (y/N): "
        );

        if (appendAnswer.toLowerCase() === "y") {
          if (fs.existsSync(configPath)) {
            let content = fs.readFileSync(configPath, "utf-8");
            const closingIndex = content.lastIndexOf("};");
            if (closingIndex !== -1) {
              content =
                content.slice(0, closingIndex) +
                `\n  // Migrated from Google Drive Folder: ${fileId}` +
                allRegistrySnippets.join("") +
                "\n" +
                content.slice(closingIndex);
              fs.writeFileSync(configPath, content, "utf-8");
              console.log(`[Success] Appended ${migratedCount} entries to ${configPath}`);
            }
          }
        }
      }

      return;
    }

    // Single File Mode
    const fileName = metaRes.data.name || `drive-video-${fileId}.mp4`;
    const mimeType = metaRes.data.mimeType || "video/mp4";
    const fileSize = parseInt(metaRes.data.size || "0", 10);

    console.log(`  File Name: ${fileName}`);
    console.log(`  MIME Type: ${mimeType}`);
    console.log(`  File Size: ${formatBytes(fileSize)}`);

    // Free-tier advisory check
    if (fileSize > 100 * 1024 * 1024) {
      console.log("\n⚠️  [Free-Tier Warning] This file is > 100 MB.");
      console.log("   ImageKit free accounts have per-file upload size limits and a 20 GB/month bandwidth quota.");
      console.log("   Compressing down to high-efficiency 1080p/720p web MP4 is strongly recommended.");
      if (!compress) {
        const answer = await askQuestion("   Would you like to compress this video for web delivery? (Y/n): ");
        if (answer.toLowerCase() !== "n") {
          compress = true;
        }
      }
    }

    const singleResult = await processSingleVideo({
      drive,
      imagekit,
      fileId,
      fileName,
      fileSize,
      customTitle,
      customKey,
      existingKeys,
      thumbnailTime,
      compress,
      folder,
      tmpDir,
    });

    if (singleResult) {
      console.log("\n=======================================================");
      console.log("  MIGRATION SUCCESSFUL! 🎉");
      console.log("=======================================================\n");

      console.log("TypeScript registry entry ready for 'src/config/media/videos.ts':\n");
      console.log(singleResult.registrySnippet);
      console.log("\nUsage in your components:");
      console.log(`  import { VideoPlayer } from "@/components/media/VideoPlayer";`);
      console.log(`  import { videos } from "@/config/media/videos";`);
      console.log(`  <VideoPlayer video={videos.${singleResult.registryKey}} />\n`);

      const appendAnswer = await askQuestion(
        "Would you like to automatically append this entry to 'src/config/media/videos.ts'? (y/N): "
      );

      if (appendAnswer.toLowerCase() === "y") {
        const configPath = path.resolve(process.cwd(), "src/config/media/videos.ts");
        if (fs.existsSync(configPath)) {
          let content = fs.readFileSync(configPath, "utf-8");
          const closingIndex = content.lastIndexOf("};");
          if (closingIndex !== -1) {
            content =
              content.slice(0, closingIndex) +
              `\n  // Migrated from Google Drive: ${fileId}` +
              singleResult.registrySnippet +
              "\n" +
              content.slice(closingIndex);
            fs.writeFileSync(configPath, content, "utf-8");
            console.log(`[Success] Appended to ${configPath}`);
          }
        }
      }
    }


  } finally {
    // 8. Guaranteed Temporary Files Cleanup
    try {
      if (fs.existsSync(tmpDir)) {
        fs.rmSync(tmpDir, { recursive: true, force: true });
        console.log(`[Cleanup] Temporary scratch files removed.`);
      }
    } catch {
      // Ignore cleanup error
    }
  }
}

// Execute migration
runMigration().catch((err) => {
  console.error(`\n[Fatal Error] Migration aborted:`, err.message);
  process.exit(1);
});
