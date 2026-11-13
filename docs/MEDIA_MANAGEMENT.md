# Media Management Guide (ImageKit + Private Google Drive)

This document provides complete instructions for managing media assets, copying private Google Drive videos to ImageKit, and using the reusable `<VideoPlayer>` and `<MediaImage>` components in **The Digital Pillar**.

---

## 1. How It Works

```
[ Private Google Drive Video ] 
            │
            ▼ (Secure authenticated streaming via Service Account / OAuth2)
[ Local Migration CLI (`npm run media:migrate`) ]
            │
            ├─► 1. Captures crisp frame thumbnail via local FFmpeg
            ├─► 2. (Optional) Web-compresses 100MB–1GB videos to ~20MB
            │
            ▼ (Uploads via ImageKit Node.js SDK)
[ ImageKit CDN (Public) ]
            │
            ├─► Public MP4 Video Delivery
            └─► Real-time Image & Thumbnail Transformations
            │
            ▼
[ Next.js Frontend (<VideoPlayer> & <MediaImage>) ]
  - Zero Google auth required for website visitors
  - Google Drive originals remain 100% private
  - Zero Vercel image optimization costs
```

---

## 2. Setting Up ImageKit (100% Free Plan)

1. Create a free account at [https://imagekit.io](https://imagekit.io) (no credit card required).
2. Go to **Dashboard** -> **Developer Options** -> **API Keys**.
3. Copy:
   - **Public Key**
   - **Private Key**
   - **URL-endpoint** (e.g. `https://ik.imagekit.io/your_id`)
4. Add these to your local `.env` or `.env.local`:
   ```bash
   IMAGEKIT_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key

   # KEEP SECRET! Never prefix with NEXT_PUBLIC_
   IMAGEKIT_PRIVATE_KEY=your_private_key

   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
   ```

---

## 3. Authorizing Private Google Drive Access

You have two supported ways to allow the local migration utility to read your private Drive videos. **Method 1 (Service Account) is strongly recommended** because it takes 2 minutes and never requires browser redirects.

### Method 1: Google Cloud Service Account (Recommended)
1. Go to the [Google Cloud Console](https://console.cloud.google.com).
2. Create a new project (or select an existing one).
3. Search for **Google Drive API** in the API library and click **Enable**.
4. Go to **IAM & Admin** -> **Service Accounts** -> **Create Service Account**.
5. Give it a name (e.g. `media-migrator`) and click **Done**.
6. Click on the created service account, open the **Keys** tab, click **Add Key** -> **Create new key** -> choose **JSON**.
7. Download the JSON file, rename it to `google-service-account.json`, and place it in the project root:
   ```
   the-digital-pillar/google-service-account.json
   ```
   *(Note: This file is already added to `.gitignore` so it will never be committed).*
8. Copy the service account email (e.g. `media-migrator@your-project.iam.gserviceaccount.com`).
9. In Google Drive, open the private folder or file, click **Share**, paste the service account email, and set permission to **Viewer**.

### Method 2: Google OAuth2 (Alternative)
If you prefer user OAuth:
1. In Google Cloud Console, configure OAuth Consent Screen and create OAuth 2.0 Client Credentials (Desktop app).
2. Add to `.env`:
   ```bash
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   GOOGLE_REFRESH_TOKEN=your_refresh_token
   ```

---

## 4. Verifying Setup with Diagnostics

Run the self-diagnostic test to verify your environment:
```bash
npx tsx scripts/test-media-pipeline.ts
```
You should see green checkmarks for FFmpeg, ImageKit API, and Google Drive API.

---

## 5. How to Migrate a Private Video

Run the migration command with any Google Drive URL or File ID:

```bash
# Basic migration:
npm run media:migrate -- https://drive.google.com/file/d/1AbC.../view

# Recommended with web-compression (turns a 500MB raw video into ~25MB web MP4):
npm run media:migrate -- https://drive.google.com/file/d/1AbC.../view --compress

# Custom title and thumbnail capture timestamp:
npm run media:migrate -- 1AbC... --name "Studio Craft Founder Story" --time 2.0 --compress
```

### What the script does automatically:
1. Reads the private file securely from Google Drive.
2. Checks file size and warns if approaching ImageKit free limits.
3. Uses local FFmpeg to extract a thumbnail at the specified timestamp (`--time`).
4. (If `--compress` is enabled) Compresses the video to web-optimized 1080p/720p H.264 MP4 with faststart.
5. Uploads the video to ImageKit folder `/the-digital-pillar/videos/`.
6. Uploads the thumbnail to ImageKit folder `/the-digital-pillar/thumbnails/`.
7. Cleans up all temporary scratch files.
8. Prints the generated TypeScript entry and optionally appends it to `src/config/media/videos.ts`.

---

## 6. How to Register & Use Media in Components

### 6.1 Registering Videos in `src/config/media/videos.ts`
```typescript
import { MediaVideoItem } from "@/config/media/videos";

export const videos: Record<string, MediaVideoItem> = {
  studioCraft: {
    id: "studio-craft",
    title: "Studio Craft Case Study",
    videoUrl: "https://ik.imagekit.io/your_id/the-digital-pillar/videos/studiocraft.mp4",
    thumbnailUrl: "https://ik.imagekit.io/your_id/the-digital-pillar/thumbnails/studiocraft-thumb.jpg",
    aspectRatio: "9:16",
    fallbackVideoUrl: "/videos/client-testimonial.mp4",
  },
};
```

### 6.2 Using `<VideoPlayer />`
```tsx
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { videos } from "@/config/media/videos";

export function CaseStudySection() {
  return (
    <div className="max-w-md mx-auto">
      {/* 1. Using registry entry: */}
      <VideoPlayer video={videos.studioCraft} aspectRatio="9/16" />

      {/* 2. Or using direct URLs: */}
      <VideoPlayer
        videoUrl="https://ik.imagekit.io/your_id/the-digital-pillar/videos/demo.mp4"
        thumbnailUrl="https://ik.imagekit.io/your_id/the-digital-pillar/thumbnails/demo-thumb.jpg"
        aspectRatio="16/9"
        controls={true}
        loop={false}
      />
    </div>
  );
}
```

**Key Performance Features of `<VideoPlayer>`:**
- **Zero Initial Video Stream**: The `<video>` element is only loaded after the visitor clicks the play button. Visitors who do not click play download only the lightweight thumbnail (~25 KB instead of 200 MB), preserving your ImageKit free bandwidth.
- **Graceful Error Handling**: Displays a clear retry button and falls back to `fallbackVideoUrl` automatically if CDN delivery fails.

---

### 6.3 Using `<MediaImage />`
```tsx
import { MediaImage } from "@/components/media/MediaImage";
import { images } from "@/config/media/images";

export function HeroBanner() {
  return (
    <MediaImage
      image={images.heroBackground}
      quality={85}
      format="auto"
      priority={true}
      className="object-cover w-full h-[500px]"
    />
  );
}
```

**Key Cost Advantage of `<MediaImage>`:**
- Automatically requests `f-auto` (WebP/AVIF format) and `q-80` from ImageKit's edge.
- Sets `unoptimized={true}` on Next.js `Image` when serving from ImageKit, **completely bypassing Vercel's paid image optimization limits**.

---

## 7. Free-Tier Considerations & Usage Monitoring

| Resource | ImageKit Free Plan Allowance | Safe Usage Strategy |
| :--- | :--- | :--- |
| **Bandwidth** | 20 GB / month | Use `--compress` during migration to keep videos at ~15–30 MB. `<VideoPlayer>` loads videos only on user play. |
| **Storage** | 20 GB total | Store ~200–400 compressed web videos easily. |
| **Max API Upload Size** | ~100 MB–300 MB on free tiers | Use `--compress` so raw 500 MB+ files never get rejected by ImageKit API limits. |
| **Transformations** | Generous monthly quota | Handled automatically at edge (`f-auto, q-80`). |

### How to Monitor:
- View your real-time bandwidth and storage usage anytime in the [ImageKit Dashboard](https://imagekit.io/dashboard).

