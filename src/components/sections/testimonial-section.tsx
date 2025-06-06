import React from 'react'
import TitleWLogo from '@/components/common/title-w-logo'
import TestimonialCard from '../cards/testimonial-card'

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <TitleWLogo
          title="What Client Says?"
          description="Our clients appreciate our dedication to understanding their unique needs, delivering innovative solutions, and exceeding expectations. They value our expertise, seamless communication, and commitment to quality, which consistently drive exceptional results. Their trust and satisfaction fuel our passion for creating impactful, tailored services that help businesses thrive and succeed."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 lg:mx-36 mt-16">
          <TestimonialCard
            name="Talal Ibrahim"
            quote="We would like to express my appreciation for Code Ethics professionals. Their expertise, creativity and efficient collaboration significantly enhanced our project. We have received very positive feedback from our client. Thank you for delivering top-notch talent and we look forward to a continued collaboration!"
            company="BBI"
          />
          <TestimonialCard
            name="Equellence"
            quote="We are delighted with the exceptional service provided by the team at Code Ethics. Their professionalism, innovative solutions, and seamless collaboration were instrumental in the success of our project. The positive response from our stakeholders speaks volumes. Thank you for your outstanding work, and we eagerly anticipate future collaborations!"
            company="Equellence"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
