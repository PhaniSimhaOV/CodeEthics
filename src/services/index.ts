import { Client, JobOpening } from '@/payload-types'
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
