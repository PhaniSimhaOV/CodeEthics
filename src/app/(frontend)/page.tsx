import JoinCodeEthics from '@/components/cards/join-code-ethics'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import BlueBgSection from '@/components/sections/blue-bg-section'
import ClientLogoSection from '@/components/sections/client-logo-section'
import HomeHeroSection from '@/components/sections/home-hero-section'
import OurOffices from '@/components/sections/our-offices'
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
      <TwoColumnLayout
        image={'/images/about_img_02.png'}
        caption={'About Us Code Ethics'}
        title={'We Provide You Best Experience'}
        list={[
          {
            id: '1',
            text: 'Code Ethics is a Technology, Consulting & Outsourcing service provider, headquartered in the Washington DC, USA & Hyderabad, IN.',
          },
        ]}
        description={
          'Started in the year 2022 with an aim to provide High Quality services in Information Technology & Consulting Domains.'
        }
        buttonText={'More'}
        className="bg-[url('/images/bg/about-bg.png')] bg-cover bg-center md:py-32"
      />
      <OurOffices />
      <TwoColumnLayout
        image={'/images/about_img_04.png'}
        caption={'What do We Do'}
        title={'Unleash the Power of Ethical Innovation'}
        description={
          'At Code Ethics, we are committed to leveraging cutting-edge technology to fuel business growth while maintaining the highest ethical standards. Our team of skilled professionals is focused on helping organizations like yours succeed in the ever-evolving digital landscape, ensuring both innovation and integrity every step of the way.'
        }
        buttonText={'Discover More'}
        buttonVariant={'default'}
        className="md:py-32"
      />
      <BlueBgSection
        title={'Services & Domains'}
        description={
          'We have expertise in Application Development & Maintenance, Technology & Digital Transformation, Product Implementation, Data Engineering, Artificial Intelligence, AMS, CRM, CMS, ERP, Quality Assurance & SRE Services. Domain expertise : We provide end to end technology services to various industries like Financial Services, Health Care and Hospitality, Manufacturing, Media, Gaming & Telecom, Automobile, Education & Public services'
        }
        image={'/images/bg/using-laptop-ai.webp'}
      />
      <JoinCodeEthics />
    </>
  )
}
