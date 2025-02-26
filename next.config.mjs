const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/hyung-rae' : '',
  assetPrefix: isProd ? '/hyung-rae/' : '',
}

export default nextConfig
