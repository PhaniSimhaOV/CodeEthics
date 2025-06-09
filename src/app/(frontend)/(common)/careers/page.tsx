import TwoColumnLayout from '@/components/layout/two-column-layout'
import JobOpenings from '@/components/sections/job-openings'
import { careerPageTitleSection } from '@/constants/career-page'
import { fetchJobOpenings } from '@/services'
import React from 'react'

const CareersPage = async () => {
  const jobOpenings = await fetchJobOpenings()
  return (
    <>
      <TwoColumnLayout {...careerPageTitleSection} />
      <JobOpenings jobOpenings={jobOpenings?.docs ?? []} />
    </>
  )
}

export default CareersPage
