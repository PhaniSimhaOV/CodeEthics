import ClientLogoSection from '@/components/sections/client-logo-section'
import HomeHeroSection from '@/components/sections/home-hero-section'
import JobOpenings from '@/components/sections/job-openings'
import { fetchClientLogos, fetchJobOpenings } from '@/services'
import React from 'react'

export default async function HomePage() {
  const jobOpenings = await fetchJobOpenings()
  const clientLogos = await fetchClientLogos()

  return (
    <>
      <HomeHeroSection />
      <JobOpenings jobOpenings={jobOpenings?.docs ?? []} />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}
