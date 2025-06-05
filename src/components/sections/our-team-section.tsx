import React from 'react'
import TitleWLogo from '@/components/common/title-w-logo'
import TeamMemberCard from '../cards/team-member-card'

const OurTeamSection = () => {
  return (
    <section className="py-12 md:py-32">
      <div className="container px-4">
        <TitleWLogo title="Meet Our Team" />
        <div className="flex justify-center mt-10">
          <TeamMemberCard
            image="/images/team01.png"
            name="Nityusha Mateti"
            designation="Founder & Head of Operations"
            linkedinUrl="https://in.linkedin.com/in/nityusha-mateti-64821a127"
          />
        </div>
      </div>
    </section>
  )
}

export default OurTeamSection
