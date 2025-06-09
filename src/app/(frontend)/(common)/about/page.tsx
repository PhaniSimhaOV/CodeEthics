import React from 'react'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import ClientLogoSection from '@/components/sections/client-logo-section'
import MvcSection from '@/components/sections/mvc-section'
import VideoSection from '@/components/sections/video-section'
import FaqSection from '@/components/sections/faq-section'
import { fetchClientLogos } from '@/services'
import TestimonialSlider from '@/components/sections/testimonial-slider'
import { aboutUsCodeEthics, aboutUsSkilledStack } from '@/constants/about-page'

const AboutPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <TwoColumnLayout {...aboutUsCodeEthics} />
      <TwoColumnLayout {...aboutUsSkilledStack} />
      <MvcSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <VideoSection />
      <FaqSection />
      <TestimonialSlider />
    </>
  )
}

export default AboutPage
