/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
  protocol: 'https',
        hostname: '**',
        port: '',

  }
    ],
  },
  typescript:{
        ignoreBuildErrors: true,

  },
    distDir: 'dist', // Change this to your desired folder name
      ignoreDuringBuilds: true,


};

export default nextConfig;
