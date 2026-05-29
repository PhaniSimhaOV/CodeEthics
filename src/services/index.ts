import { Blog, Client, JobOpening } from '@/payload-types'
import { PaginatedDocs } from 'payload'

export const fetchJobOpenings = async (): Promise<PaginatedDocs<JobOpening> | null> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-openings`, {
    next: { revalidate: 0 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch job openings')
  }

  return response.json()
}

export const fetchClientLogos = async (): Promise<PaginatedDocs<Client> | null> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
    next: { revalidate: 0 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch client logos')
  }

  return response.json()
}

export const fetchBlogs = async (): Promise<PaginatedDocs<Blog> | null> => {
  const params = new URLSearchParams({
    'where[published][equals]': 'true',
    sort: '-publishedAt',
    depth: '1',
    limit: '50',
  })
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?${params.toString()}`, {
    next: { revalidate: 0 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return response.json()
}

export const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  const params = new URLSearchParams({
    'where[slug][equals]': slug,
    'where[published][equals]': 'true',
    depth: '1',
    limit: '1',
  })
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?${params.toString()}`, {
    next: { revalidate: 0 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch blog')
  }

  const data = (await response.json()) as PaginatedDocs<Blog>
  return data.docs?.[0] ?? null
}
