import type { NextConfig } from 'next'

const pages = process.env.GITHUB_PAGES === 'true'
const base = pages ? '/vigneshk.github.io' : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
  basePath: base || undefined,
  assetPrefix: base || undefined,
}

export default nextConfig
