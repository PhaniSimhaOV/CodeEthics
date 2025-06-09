import JoinCodeEthics from '@/components/cards/join-code-ethics'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import BlueBgSection from '@/components/sections/blue-bg-section'
import ClientLogoSection from '@/components/sections/client-logo-section'
import HomeHeroSection from '@/components/sections/home-hero-section'
import OurOffices from '@/components/sections/our-offices'
import OurTeamSection from '@/components/sections/our-team-section'
import ServicesMarquee from '@/components/sections/services-marquee'
import ServicesSlider from '@/components/sections/services-slider'
import { homePageAboutUs, homePageServices, homePageWhatWeDo } from '@/constants/home-page'
import { fetchClientLogos } from '@/services'
import React from 'react'

export default async function HomePage() {
  const clientLogos = await fetchClientLogos()

  return (
    <>
      <HomeHeroSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <ServicesSlider />
      <TwoColumnLayout {...homePageAboutUs} />
      <OurOffices />
      <ServicesMarquee />
      <TwoColumnLayout {...homePageWhatWeDo} />
      <BlueBgSection {...homePageServices} />
      <OurTeamSection />
      <JoinCodeEthics />
    </>
  )
}
