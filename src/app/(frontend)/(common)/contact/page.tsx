import ClientLogoSection from '@/components/sections/client-logo-section'
import { fetchClientLogos } from '@/services'
import React from 'react'

const ContactPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}

export default ContactPage
