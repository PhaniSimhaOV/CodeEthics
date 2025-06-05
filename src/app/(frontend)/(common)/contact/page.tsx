import ClientLogoSection from '@/components/sections/client-logo-section'
import OurOffices from '@/components/sections/our-offices'
import { fetchClientLogos } from '@/services'
import React from 'react'

const ContactPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <OurOffices hideTitle />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}

export default ContactPage
