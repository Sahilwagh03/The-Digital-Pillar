/**
 * Diagnostics & Connectivity Test for Media Pipeline
 * Run with: npx tsx scripts/test-media-pipeline.ts
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { execFile } from "child_process";
import { promisify } from "util";
import { google } from "googleapis";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const ImageKit = require("imagekit");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ffmpegPath: string | null = require("ffmpeg-static");

const execFileAsync = promisify(execFile);

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

async function runDiagnostics() {
  console.log("\n=======================================================");
  console.log("  The Digital Pillar - Media Pipeline Diagnostics");
  console.log("=======================================================\n");

  let issuesFound = 0;

  // 1. Check FFmpeg Static Binary
  console.log("1. Checking FFmpeg Static Engine...");
  if (ffmpegPath && fs.existsSync(ffmpegPath)) {
    try {
      const { stdout } = await execFileAsync(ffmpegPath, ["-version"]);
      const versionLine = stdout.split("\n")[0];
      console.log(`   ✅ FFmpeg Binary: Ready (${versionLine.slice(0, 45)}...)`);
    } catch {
      console.log(`   ⚠️ FFmpeg binary exists but version probe failed.`);
      issuesFound++;
    }
  } else {
    console.log("   ❌ FFmpeg binary not found via ffmpeg-static.");
    issuesFound++;
  }

  // 2. Check ImageKit Configuration
  console.log("\n2. Checking ImageKit Credentials...");
  const ikPublic = process.env.IMAGEKIT_PUBLIC_KEY || process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const ikPrivate = process.env.IMAGEKIT_PRIVATE_KEY;
  const ikEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (ikPublic && ikPrivate && ikEndpoint) {
    console.log(`   ✅ ImageKit URL Endpoint: ${ikEndpoint}`);
    console.log(`   ✅ ImageKit Public Key:   ${ikPublic.slice(0, 10)}...`);
    console.log(`   ✅ ImageKit Private Key:  [Securely Defined]`);

    try {
      const ik = new ImageKit({
        publicKey: ikPublic,
        privateKey: ikPrivate,
        urlEndpoint: ikEndpoint,
      });

      // Simple probe to verify credentials with ImageKit API
      const files = await ik.listFiles({ limit: 1 });
      console.log(`   ✅ ImageKit API Connection: Authenticated successfully! (Found ${files.length} existing assets)`);
    } catch (err: unknown) {
      console.log(`   ⚠️ ImageKit credentials provided, but API request returned: ${(err as Error).message}`);
      console.log("      (Check if your API keys match your dashboard at https://imagekit.io)");
      issuesFound++;
    }
  } else {
    console.log("   ⚠️ ImageKit credentials not yet set in .env or .env.local.");
    console.log("      Set IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT to enable uploads.");
    issuesFound++;
  }

  // 3. Check Google Drive Credentials
  console.log("\n3. Checking Google Drive API Credentials...");
  const serviceAccountPath =
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || "./google-service-account.json";
  const resolvedSA = path.resolve(process.cwd(), serviceAccountPath);

  if (fs.existsSync(resolvedSA)) {
    try {
      const raw = JSON.parse(fs.readFileSync(resolvedSA, "utf-8"));
      console.log(`   ✅ Service Account Key File: ${path.basename(resolvedSA)}`);
      console.log(`   ✅ Service Account Email:    ${raw.client_email}`);

      const auth = new google.auth.GoogleAuth({
        keyFile: resolvedSA,
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      });
      const drive = google.drive({ version: "v3", auth });
      await drive.about.get({ fields: "user" });
      console.log("   ✅ Google Drive API Connection: Authenticated successfully!");
    } catch (err: unknown) {
      console.log(`   ⚠️ Service Account file exists, but authentication failed: ${(err as Error).message}`);
      console.log("      (Make sure Google Drive API is enabled in your Google Cloud Console project)");
      issuesFound++;
    }
  } else {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

    if (clientId && clientSecret && refreshToken) {
      console.log("   ✅ Google OAuth2 credentials defined in environment.");
      try {
        const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
        oauth2Client.setCredentials({ refresh_token: refreshToken });
        const drive = google.drive({ version: "v3", auth: oauth2Client });
        await drive.about.get({ fields: "user" });
        console.log("   ✅ Google Drive API Connection: Authenticated successfully via OAuth2!");
      } catch (err: unknown) {
        console.log(`   ⚠️ Google OAuth2 credentials provided, but connection failed: ${(err as Error).message}`);
        issuesFound++;
      }
    } else {
      console.log(`   ℹ️ No Service Account key file found at '${serviceAccountPath}' and no OAuth2 tokens in .env.`);
      console.log("      To migrate private Google Drive videos:");
      console.log("      1. Save your service account JSON file as './google-service-account.json'");
      console.log("      2. Share your private Google Drive videos/folder with that service account email as Viewer.");
    }
  }

  console.log("\n=======================================================");
  if (issuesFound === 0) {
    console.log("  ALL CHECKS PASSED! Ready for video migration. 🚀");
  } else {
    console.log(`  Diagnostics completed with ${issuesFound} notices.`);
    console.log("  See docs/MEDIA_MANAGEMENT.md for step-by-step setup instructions.");
  }
  console.log("=======================================================\n");
}

runDiagnostics().catch(console.error);

