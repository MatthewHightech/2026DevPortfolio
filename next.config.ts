import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Avoid stale optimized images while iterating locally.
    minimumCacheTTL: isDev ? 0 : 60 * 60 * 24 * 30,
  },
  async headers() {
    const longCache = isDev
      ? "no-cache"
      : "public, max-age=31536000, immutable";

    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: longCache,
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: longCache,
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: longCache,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
