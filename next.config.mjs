import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site is static content served by Vercel; no special runtime needed.
  reactStrictMode: true,
  // This project lives inside a monorepo that has its own package-lock.json at
  // the repo root — point file tracing at this standalone project so Next.js
  // doesn't mis-detect the workspace root.
  outputFileTracingRoot: path.join(path.dirname(fileURLToPath(import.meta.url)))
}

export default nextConfig
