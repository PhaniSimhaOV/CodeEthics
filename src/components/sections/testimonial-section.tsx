import React from 'react'
import TitleWLogo from '@/components/common/title-w-logo'
import TestimonialCard from '../cards/testimonial-card'
import { testimonialList } from '@/constants/services'

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <TitleWLogo
          title="What Client Says?"
          description="Our clients appreciate our dedication to understanding their unique needs, delivering innovative solutions, and exceeding expectations. They value our expertise, seamless communication, and commitment to quality, which consistently drive exceptional results. Their trust and satisfaction fuel our passion for creating impactful, tailored services that help businesses thrive and succeed."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {testimonialList.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
