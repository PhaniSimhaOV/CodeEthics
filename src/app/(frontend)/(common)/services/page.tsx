import React from 'react'
import ServicesLists from '@/components/sections/services-lists'
import { fetchClientLogos } from '@/services'
import ClientLogoSection from '@/components/sections/client-logo-section'
import JoinCodeEthics from '@/components/cards/join-code-ethics'

const ServicesPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <ServicesLists />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <JoinCodeEthics />
    </>
  )
}

export default ServicesPage
