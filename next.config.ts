import withPayload from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    cacheLife: {
      spotifyCurrentTrack: {
        stale: 3600,
        revalidate: 120,
        expire: 86400,
      },
      spotifyTopTracks: {
        stale: 3600,
        revalidate: 86400,
        expire: 86400,
      },
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
    ],
  },
};

export default withPayload(nextConfig);
