import ClientLogoSection from '@/components/sections/client-logo-section'
import MvcSection from '@/components/sections/mvc-section'
import { fetchClientLogos } from '@/services'
import React from 'react'

const AboutPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <MvcSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}

export default AboutPage
