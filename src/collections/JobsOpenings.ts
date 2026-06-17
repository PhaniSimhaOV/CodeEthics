import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const JobOpenings: CollectionConfig = {
  slug: 'job-openings',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['id', 'image', 'title', 'createdAt'],
    hideAPIURL: true,
  },
  access: {
    read: () => true, // Allow public read access
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description:
          'Cover image for the role. Recommended ratio 1:1 or 4:3. Displays alongside the description on /careers.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
      admin: {
        description:
          'Rich-text job description — supports headings, bold, italics, lists, links, and quotes. Appears above the Key Responsibilities list on /careers.',
      },
    },
    {
      type: 'array',
      name: 'keyResponsibilities',
      maxRows: 5,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Short bullet points (up to 5) summarising the role.',
      },
    },
  ],
}
