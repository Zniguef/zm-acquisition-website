import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  // Explicit path to the request config (defaults to ./src/i18n/request.ts)
  "./src/i18n/request.ts"
);

// IMPORTANT: `output: "export"` (static export) is INCOMPATIBLE with
// Next.js middleware (proxy.ts). During `npm run dev`, the locale-redirect
// proxy runs fine. For production deploys to a CDN, set the env var
// NEXT_STATIC_EXPORT=true and configure your host to redirect / → /ar.
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Enable static export only when explicitly requested (e.g. for Netlify/GH Pages).
  ...(isStaticExport && { output: "export" }),

  // next/image optimisation requires a Node server; always disable for portability.
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

