import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet d’ouvrir le site depuis le téléphone (Wi‑Fi local) en dev
  allowedDevOrigins: ["192.168.1.37", "127.0.0.1", "localhost"],
  // Toutes les images servies telles quelles, sans optimisation Next
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
