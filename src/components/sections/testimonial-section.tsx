'use client'

import React from 'react'
import TitleWLogo from '@/components/common/title-w-logo'
import TestimonialCard from '../cards/testimonial-card'
import { testimonialList } from '@/constants/services'
import { motion } from 'motion/react'

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <TitleWLogo
          title="What Client Says?"
          description="Our clients appreciate our dedication to understanding their unique needs, delivering innovative solutions, and exceeding expectations. They value our expertise, seamless communication, and commitment to quality, which consistently drive exceptional results. Their trust and satisfaction fuel our passion for creating impactful, tailored services that help businesses thrive and succeed."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {testimonialList.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              key={testimonial.name}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
