import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// 1. Load .env.local without external dependencies
function loadEnvLocal() {
  const envPath = path.join(rootDir, ".env.local");
  if (!fs.existsSync(envPath)) return {};
  const env = {};
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  }
  return env;
}

const env = loadEnvLocal();
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY || env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET || env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("❌ Cloudinary credentials missing!");
  console.error(
    "Please populate .env.local with:\n" +
      "  CLOUDINARY_CLOUD_NAME=your_cloud_name\n" +
      "  CLOUDINARY_API_KEY=your_api_key\n" +
      "  CLOUDINARY_API_SECRET=your_api_secret\n"
  );
  process.exit(1);
}

// 2. Configure Cloudinary securely (Server-side only)
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

// 3. Locate local MP4 video
const candidatePaths = [
  path.join(rootDir, "public", "videos", "hero", "ds-marcom-bangalore-optimized.mp4"),
  path.join(rootDir, "public", "videos", "hero", "ds-marcom-bangalore.mp4"),
  path.join(rootDir, "public", "videos", "ds-marcom-bangalore.mp4"),
];

const videoPath = candidatePaths.find((p) => fs.existsSync(p));

if (!videoPath) {
  console.error("❌ Local Hero video not found in candidate paths:", candidatePaths);
  process.exit(1);
}

const stats = fs.statSync(videoPath);
const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`📁 Found video at: ${videoPath} (${fileSizeMB} MB)`);
console.log("🚀 Starting Cloudinary upload via upload_large (chunked multipart)...");
console.log("   Target Public ID: ds-marcom/hero/ds-marcom-bangalore");
console.log("   Resource Type: video");

try {
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_large(
      videoPath,
      {
        resource_type: "video",
        public_id: "ds-marcom/hero/ds-marcom-bangalore",
        overwrite: true,
        chunk_size: 6000000, // 6 MB chunks for reliability
      },
      (error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res);
        }
      }
    );
  });

  console.log("\n✅ Video successfully uploaded to Cloudinary!");
  console.log("   Public ID:", result.public_id);
  console.log("   Format:", result.format);
  console.log("   Bytes:", result.bytes);
  console.log("   Duration:", result.duration);
  console.log("   Raw Secure URL:", result.secure_url);

  // Generate delivery-optimized URL with automatic format and quality
  const optimizedUrl = cloudinary.url(result.public_id, {
    resource_type: "video",
    quality: "auto",
    fetch_format: "auto",
    secure: true,
  });

  console.log("   Optimized Delivery URL (q_auto, f_auto):", optimizedUrl);

  // Update HeroShell.jsx if present
  const heroShellPath = path.join(
    rootDir,
    "src",
    "components",
    "sections",
    "HeroShell.jsx"
  );

  if (fs.existsSync(heroShellPath)) {
    let heroContent = fs.readFileSync(heroShellPath, "utf8");
    const oldSourceRegex =
      /<source\s+src="\/videos\/(?:hero\/)?ds-marcom-bangalore\.mp4"\s+type="video\/mp4"\s*\/>/g;

    if (oldSourceRegex.test(heroContent)) {
      heroContent = heroContent.replace(
        oldSourceRegex,
        `<source src="${optimizedUrl}" type="video/mp4" />`
      );
      // Remove any duplicate fallback source line if two were present
      const cleanDuplicateRegex =
        /(<source\s+src="[^"]+"\s+type="video\/mp4"\s*\/>\s*)\n\s*<source\s+src="\/videos\/(?:hero\/)?ds-marcom-bangalore\.mp4"\s+type="video\/mp4"\s*\/>/g;
      heroContent = heroContent.replace(cleanDuplicateRegex, "$1");

      fs.writeFileSync(heroShellPath, heroContent, "utf8");
      console.log("📝 Updated HeroShell.jsx video source with Cloudinary URL!");
    }
  }

  // Write metadata artifact to scripts/cloudinary-video-result.json
  const resultData = {
    public_id: result.public_id,
    optimized_url: optimizedUrl,
    secure_url: result.secure_url,
    cloud_name: cloudName,
    uploaded_at: new Date().toISOString(),
  };
  fs.writeFileSync(
    path.join(rootDir, "scripts", "cloudinary-video-result.json"),
    JSON.stringify(resultData, null, 2),
    "utf8"
  );

  console.log("\n🎉 Integration complete. Result saved to scripts/cloudinary-video-result.json");
} catch (error) {
  console.error("❌ Cloudinary upload failed:", error);
  process.exit(1);
}
