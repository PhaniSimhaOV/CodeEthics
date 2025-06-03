import { CollectionConfig } from 'payload'

export const JobOpenings: CollectionConfig = {
  slug: 'job-openings',
  access: {
    read: () => true, // Allow public read access
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
