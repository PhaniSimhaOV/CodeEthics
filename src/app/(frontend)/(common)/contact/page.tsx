import ClientLogoSection from '@/components/sections/client-logo-section'
import ContactUsSection from '@/components/sections/contact-us-section'
import OurOffices from '@/components/sections/our-offices'
import { fetchClientLogos } from '@/services'
import React from 'react'

const ContactPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <OurOffices hideTitle />
      <ContactUsSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}

export default ContactPage
