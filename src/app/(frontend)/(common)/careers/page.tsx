import JobOpenings from '@/components/sections/job-openings'
import { fetchJobOpenings } from '@/services'
import React from 'react'

const CareersPage = async () => {
  const jobOpenings = await fetchJobOpenings()
  return (
    <>
      <JobOpenings jobOpenings={jobOpenings?.docs ?? []} />
    </>
  )
}

export default CareersPage
