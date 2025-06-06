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
    },
    {
      name: 'title',
      type: 'text',
      required: true,
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
    },
  ],
}
