import React from 'react'
import ServicesLists from '@/components/sections/services-lists'
import { fetchClientLogos } from '@/services'
import ClientLogoSection from '@/components/sections/client-logo-section'
import JoinCodeEthics from '@/components/cards/join-code-ethics'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import BlueBgSection from '@/components/sections/blue-bg-section'

const ServicesPage = async () => {
  const clientLogos = await fetchClientLogos()
  return (
    <>
      <ServicesLists />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <TwoColumnLayout
        image={'/images/pexels-kampus-8204322.jpg'}
        caption={'What do We Do'}
        title={'Unleash the Power of Ethical Innovation'}
        description={
          "In today's rapidly evolving world, innovation isn't just about creating new technologies—it's about creating meaningful solutions that prioritize integrity, responsibility, and sustainability. Ethical innovation goes beyond mere advancement; it is about ensuring that progress serves not only the bottom line but also society and the planet. At its core, ethical innovation is about making thoughtful decisions that balance technological progress with the well-being of individuals, communities, and the environment. It challenges businesses and innovators to ask: How can we create new opportunities without compromising the values that matter most?"
        }
        buttonText={'Discover More'}
        buttonVariant={'default'}
      />
      <BlueBgSection
        title={'Innovative IT Solutions, Tailored for Creative Excellence.'}
        description={
          'Empowering creative agencies with innovative IT solutions designed to streamline workflows and ignite imagination. Let technology fuel your creativity and drive success'
        }
        image={'/images/bg/business-meeting.webp'}
      />
      <JoinCodeEthics />
    </>
  )
}

export default ServicesPage
