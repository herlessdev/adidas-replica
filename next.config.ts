import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brand.assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com", // Agrega este dominio
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};

export default nextConfig;
