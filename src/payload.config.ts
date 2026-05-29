import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import type { Plugin } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { JobOpenings } from './collections/JobsOpenings'
import { Clients } from './collections/clients'
import { Blogs } from './collections/Blogs'

// Use S3 for media in production (Amplify Lambda has no persistent disk).
// Local dev with no S3 creds falls back to Payload's default local-disk storage.
const s3Plugin: Plugin | null = process.env.S3_BUCKET
  ? s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        region: process.env.S3_REGION,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
      },
    })
  : null

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    avatar: 'default',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    theme: 'dark',
    meta: {
      title: 'Code Ethics',
      description: 'Code Ethics is a platform for sharing and discussing ethical coding practices.',
      icons: [
        {
          url: './images/icons/favicon.ico',
        },
      ],
    },
    components: {
      graphics: {
        Icon: './components/Icon',
        Logo: './components/Logo',
      },
    },
  },
  collections: [Users, Media, JobOpenings, Clients, Blogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin(), ...(s3Plugin ? [s3Plugin] : [])],
})
