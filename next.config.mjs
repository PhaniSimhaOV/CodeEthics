import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js Image optimisation to fetch Payload-uploaded media from:
    //  - the local Payload media endpoint at /api/media/file/<filename>,
    //  - the production S3 bucket (when S3_BUCKET / S3_REGION are set),
    //  - the deployed AWS Amplify domain (for preview deploys / before DNS).
    remotePatterns: [
      // local dev (any port)
      { protocol: 'http', hostname: 'localhost', pathname: '/api/media/file/**' },
      { protocol: 'http', hostname: '127.0.0.1', pathname: '/api/media/file/**' },
      // production same-origin over HTTPS
      { protocol: 'https', hostname: 'www.codeethics.in', pathname: '/api/media/file/**' },
      { protocol: 'https', hostname: 'codeethics.in', pathname: '/api/media/file/**' },
      // production: media served directly from S3 (S3 storage adapter URL)
      {
        protocol: 'https',
        hostname: `${process.env.S3_BUCKET || 'codeethics-media-prod'}.s3.${process.env.S3_REGION || 'ap-south-1'}.amazonaws.com`,
        pathname: '/**',
      },
      // Amplify hosting subdomain (default *.amplifyapp.com)
      { protocol: 'https', hostname: '*.amplifyapp.com', pathname: '/**' },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
