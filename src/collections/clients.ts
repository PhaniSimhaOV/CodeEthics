import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['id', 'logo', 'name', 'website', 'createdAt'],
    hideAPIURL: true,
  },
  access: {
    read: () => true, // Public read access
    create: authenticated,
    update: authenticated,
    delete: authenticated,
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
    },
  ],
}
