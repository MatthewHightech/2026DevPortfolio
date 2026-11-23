import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Avoid stale optimized images while iterating locally.
    minimumCacheTTL: isDev ? 0 : 60 * 60 * 24 * 30,
  },
  async headers() {
    // Only cache our own public images. Leave /_next/* to Next — custom
    // Cache-Control there triggers a dev warning and can break local behavior.
    const imageCache = isDev
      ? "no-cache"
      : "public, max-age=31536000, immutable";

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: imageCache,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
