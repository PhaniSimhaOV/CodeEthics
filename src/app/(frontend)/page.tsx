import JoinCodeEthics from '@/components/cards/join-code-ethics'
import ClientLogoSection from '@/components/sections/client-logo-section'
import HomeHeroSection from '@/components/sections/home-hero-section'
import ServicesSlider from '@/components/sections/services-slider'
import { fetchClientLogos } from '@/services'
import React from 'react'

export default async function HomePage() {
  const clientLogos = await fetchClientLogos()

  return (
    <>
      <HomeHeroSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <ServicesSlider />
      <JoinCodeEthics />
    </>
  )
}
