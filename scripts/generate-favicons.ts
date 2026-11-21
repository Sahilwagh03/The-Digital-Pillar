import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function createIco(pngBuffers: Buffer[], sizes: number[]): Promise<Buffer> {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(pngBuffers.length, 4); // Number of images

  const entrySize = 16;
  const dirSize = entrySize * pngBuffers.length;
  let currentOffset = 6 + dirSize;

  const entries: Buffer[] = [];
  for (let i = 0; i < pngBuffers.length; i++) {
    const entry = Buffer.alloc(16);
    const size = sizes[i];
    const buf = pngBuffers[i];
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette count (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image in bytes
    entry.writeUInt32LE(currentOffset, 12); // offset of image data
    entries.push(entry);
    currentOffset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function generate() {
  const sourcePath = path.resolve(process.cwd(), "scripts/extracted-icon.png");
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source image not found: ${sourcePath}`);
  }

  console.log("Reading source image:", sourcePath);

  // Generate PNGs at required sizes
  const [p16, p32, p48, p180, p192, p512] = await Promise.all([
    sharp(sourcePath).resize(16, 16).png().toBuffer(),
    sharp(sourcePath).resize(32, 32).png().toBuffer(),
    sharp(sourcePath).resize(48, 48).png().toBuffer(),
    sharp(sourcePath).resize(180, 180).png().toBuffer(),
    sharp(sourcePath).resize(192, 192).png().toBuffer(),
    sharp(sourcePath).resize(512, 512).png().toBuffer(),
  ]);

  // Generate multi-size ICO (16, 32, 48)
  const icoBuffer = await createIco([p16, p32, p48], [16, 32, 48]);

  // Write ICO files
  fs.writeFileSync(path.resolve(process.cwd(), "app/favicon.ico"), icoBuffer);
  fs.writeFileSync(path.resolve(process.cwd(), "public/favicon.ico"), icoBuffer);
  console.log("✓ Created app/favicon.ico and public/favicon.ico (multi-size 16x16, 32x32, 48x48)");

  // Write Apple touch icon (180x180)
  fs.writeFileSync(path.resolve(process.cwd(), "app/apple-icon.png"), p180);
  fs.writeFileSync(path.resolve(process.cwd(), "public/apple-icon.png"), p180);
  fs.writeFileSync(path.resolve(process.cwd(), "public/apple-touch-icon.png"), p180);
  console.log("✓ Created app/apple-icon.png and public/apple-touch-icon.png (180x180)");

  // Write standard standalone PNGs
  fs.writeFileSync(path.resolve(process.cwd(), "public/favicon-16x16.png"), p16);
  fs.writeFileSync(path.resolve(process.cwd(), "public/favicon-32x32.png"), p32);
  fs.writeFileSync(path.resolve(process.cwd(), "public/icon-192.png"), p192);
  fs.writeFileSync(path.resolve(process.cwd(), "public/icon-512.png"), p512);
  console.log("✓ Created public/favicon-16x16.png, favicon-32x32.png, icon-192.png, icon-512.png");

  // Create crisp SVG icon embedding the 512x512 PNG data URL
  const base64Png512 = p512.toString("base64");
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="100%" height="100%">
  <image width="512" height="512" href="data:image/png;base64,${base64Png512}" xlink:href="data:image/png;base64,${base64Png512}"/>
</svg>
`;

  fs.writeFileSync(path.resolve(process.cwd(), "app/icon.svg"), svgContent, "utf8");
  fs.writeFileSync(path.resolve(process.cwd(), "public/icon.svg"), svgContent, "utf8");
  fs.writeFileSync(path.resolve(process.cwd(), "public/favicon.svg"), svgContent, "utf8");
  console.log("✓ Created app/icon.svg, public/icon.svg, and public/favicon.svg");

  console.log("Favicon generation completed successfully!");
}

generate().catch((err) => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
