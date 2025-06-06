import TwoColumnLayout from '@/components/layout/two-column-layout'
import ClientLogoSection from '@/components/sections/client-logo-section'
import MvcSection from '@/components/sections/mvc-section'
import VideoSection from '@/components/sections/video-section'
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
      <TwoColumnLayout
        image={'/images/code-screen.jpg'}
        title={'SKILLED POOL AND TECH STACK EXPERTISE'}
        list={[
          {
            id: '1',
            text: '40+ Active experienced engineers located across geographies.',
          },
          {
            id: '2',
            text: '20+ Standby experienced engineers who can be deployed immediately on need basis.',
          },
        ]}
        twoColumnDescription={[
          {
            id: '1',
            text: 'C, C#, Python, Java, Virtual Reality, AI, Cloud, Scala, .Net, React, Angular, Vue, Next, Node, Graph QL',
          },
          {
            id: '2',
            text: 'SAP ALL MODULES , ERP Implementations',
          },
          {
            id: '3',
            text: 'Vtiger CRM, Chat Bot',
          },
          {
            id: '4',
            text: 'Generative AI, ML, Arc GIS',
          },
          {
            id: '5',
            text: 'Quality Assurance & Analysis',
          },
          {
            id: '6',
            text: 'Data Bricks, Informatica, AWS',
          },
        ]}
        buttonText={'More'}
        isReverse
      />
      <MvcSection />
      <ClientLogoSection logos={clientLogos?.docs ?? []} />
      <VideoSection />
    </>
  )
}

export default AboutPage
