/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://muhammadazmi.web.id',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
