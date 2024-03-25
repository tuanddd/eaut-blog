/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        hostname: 'images.pexels.com'
      },
      {
        hostname: 'krkztdl9g4rhvs2w.public.blob.vercel-storage.com'
      }
    ]
  }
};

export default nextConfig;
