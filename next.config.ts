import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "motion",
      "@phosphor-icons/react",
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
