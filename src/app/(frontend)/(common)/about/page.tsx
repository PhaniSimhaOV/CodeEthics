import TwoColumnLayout from '@/components/layout/two-column-layout'
import ClientLogoSection from '@/components/sections/client-logo-section'
import MvcSection from '@/components/sections/mvc-section'
import { fetchClientLogos } from '@/services'
import React from 'react'

const AboutPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <TwoColumnLayout
        image={'/images/about_img.png'}
        caption={'About Us Code ethics'}
        title={'We Provide You Best Experience'}
        list={[
          {
            id: '1',
            text: 'Code Ethics is a Technology, Consulting & Outsourcing service provider, headquartered in the Washington DC, USA & Hyderabad, IN.',
          },
          {
            id: '2',
            text: 'Started in the year 2022 with an aim to provide High Quality services in Information Technology & Consulting Domains.',
          },
        ]}
        buttonText={'More'}
      />
      <MvcSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
    </>
  )
}

export default AboutPage
