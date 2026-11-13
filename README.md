This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Media Management (ImageKit + Private Google Drive)

This project includes a media pipeline that migrates private Google Drive videos to ImageKit for public CDN delivery and optimized frame thumbnails, keeping original Google files private and avoiding Vercel serverless function timeouts.

### Quick Start:
1. **Configure credentials** in `.env.local` (see `.env.example`).
2. **Run diagnostics**:
   ```bash
   npx tsx scripts/test-media-pipeline.ts
   ```
3. **Migrate a private Google Drive video**:
   ```bash
   npm run media:migrate -- https://drive.google.com/file/d/YOUR_FILE_ID/view --compress
   ```
4. **Use `<VideoPlayer>` or `<MediaImage>` in components**:
   ```tsx
   import { VideoPlayer } from "@/components/media/VideoPlayer";
   import { videos } from "@/config/media/videos";

   <VideoPlayer video={videos.projectDemo} />
   ```

For the complete guide, see [docs/MEDIA_MANAGEMENT.md](docs/MEDIA_MANAGEMENT.md).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
