import { Blog, Client, JobOpening } from '@/payload-types'
import { PaginatedDocs } from 'payload'

export const fetchJobOpenings = async (): Promise<PaginatedDocs<JobOpening> | null> => {
  try {
    // depth=2 so the related `image` (media) doc — and its nested fields —
    // are populated on each job opening, not just returned as an ID string.
    const params = new URLSearchParams({
      depth: '2',
      sort: '-createdAt',
      limit: '50',
    })
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/job-openings?${params.toString()}`,
      { next: { revalidate: 0 } },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch job openings')
    }

    return response.json()
  } catch (error) {
    console.error('Failed to fetch job openings:', error)
    return null
  }
}

export const fetchClientLogos = async (): Promise<PaginatedDocs<Client> | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch client logos')
    }

    return response.json()
  } catch (error) {
    console.error('Failed to fetch client logos:', error)
    return null
  }
}

export const fetchBlogs = async (): Promise<PaginatedDocs<Blog> | null> => {
  try {
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
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    return null
  }
}

export const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
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
  } catch (error) {
    console.error('Failed to fetch blog by slug:', error)
    return null
  }
}