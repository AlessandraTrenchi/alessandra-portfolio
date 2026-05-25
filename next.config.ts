import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath solo su GitHub Pages senza dominio custom (alessandratrenchi.github.io/alessandra-portfolio)
  // Una volta che il dominio custom è attivo, questo non serve più
  basePath: isProd ? "/alessandra-portfolio" : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
