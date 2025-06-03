import { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
      required: true,
    },
  ],
}
