/** @type {import('next').NextConfig} */

// Empty in local dev (site served at "/"); set to "/frolov-ai" in CI so the
// static export works under https://<user>.github.io/frolov-ai/.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages.
  output: "export",
  // GitHub Pages serves project sites from a subpath.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // No Next.js image optimizer on a static host.
  images: { unoptimized: true },
};

export default nextConfig;
