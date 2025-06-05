import TwoColumnLayout from '@/components/layout/two-column-layout'
import JobOpenings from '@/components/sections/job-openings'
import { fetchJobOpenings } from '@/services'
import React from 'react'

const CareersPage = async () => {
  const jobOpenings = await fetchJobOpenings()
  return (
    <>
      <TwoColumnLayout
        image={'/images/career.png'}
        caption={'Why Choose a Career with Code Ethics'}
        title={'Innovation and Growth'}
        list={[
          {
            id: '1',
            text: 'Be part of a company that is at the forefront of digital solutions, fostering an environment that encourages innovation and continuous learning..',
          },
        ]}
        descriptionList={[
          {
            id: '1',
            title: 'Collaborative Culture',
            text: 'Join a team of professionals who believe in collaboration, open communication, and mutual support, creating a positive and inspiring work culture.',
          },
          {
            id: '2',
            title: 'Career Development',
            text: 'We prioritize the professional growth of our team members, offering opportunities for skill enhancement and career advancement.',
          },
          {
            id: '3',
            title: 'Client-Centric Approach',
            text: "At Code Ethics Webtech, we prioritize client satisfaction, and you'll have the chance to contribute to impactful projects that shape the digital success of our clients.",
          },
        ]}
        buttonText={'More'}
      />
      <JobOpenings jobOpenings={jobOpenings?.docs ?? []} />
    </>
  )
}

export default CareersPage
