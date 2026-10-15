import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet d’ouvrir le site depuis le téléphone (Wi‑Fi local) en dev
  allowedDevOrigins: ["192.168.1.37", "127.0.0.1", "localhost"],
};

export default nextConfig;
