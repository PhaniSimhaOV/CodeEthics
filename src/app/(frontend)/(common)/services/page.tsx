import React from 'react'
import ServicesLists from '@/components/sections/services-lists'
import { fetchClientLogos } from '@/services'
import ClientLogoSection from '@/components/sections/client-logo-section'
import JoinCodeEthics from '@/components/cards/join-code-ethics'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import BlueBgSection from '@/components/sections/blue-bg-section'
import TestimonialSection from '@/components/sections/testimonial-section'
import { servicesPageServices, servicesPageWhatWeDo } from '@/constants/services'

const ServicesPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <ServicesLists />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <BlueBgSection {...servicesPageServices} />
      <TwoColumnLayout {...servicesPageWhatWeDo} />
      <TestimonialSection />
      <JoinCodeEthics />
    </>
  )
}

export default ServicesPage
