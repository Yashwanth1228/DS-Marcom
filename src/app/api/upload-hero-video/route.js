import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

export async function POST() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      {
        error:
          "Cloudinary credentials missing. Ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set in .env.local",
      },
      { status: 500 }
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  const rootDir = process.cwd();
  const candidatePaths = [
    path.join(rootDir, "public", "videos", "hero", "ds-marcom-bangalore-optimized.mp4"),
    path.join(rootDir, "public", "videos", "hero", "ds-marcom-bangalore.mp4"),
    path.join(rootDir, "public", "videos", "ds-marcom-bangalore.mp4"),
  ];

  const videoPath = candidatePaths.find((p) => fs.existsSync(p));
  if (!videoPath) {
    return NextResponse.json(
      { error: "Local hero video file not found" },
      { status: 404 }
    );
  }

  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_large(
        videoPath,
        {
          resource_type: "video",
          public_id: "ds-marcom/hero/ds-marcom-bangalore",
          overwrite: true,
          chunk_size: 6000000,
        },
        (error, res) => {
          if (error) reject(error);
          else resolve(res);
        }
      );
    });

    const optimizedUrl = cloudinary.url(result.public_id, {
      resource_type: "video",
      quality: "auto",
      fetch_format: "auto",
      secure: true,
    });

    return NextResponse.json({
      success: true,
      public_id: result.public_id,
      optimized_url: optimizedUrl,
      secure_url: result.secure_url,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Cloudinary upload failed" },
      { status: 500 }
    );
  }
}
