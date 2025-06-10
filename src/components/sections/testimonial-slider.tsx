'use client'

import React from 'react'
import ClientsQuoteCard from '@/components/cards/clients-quote-card'
import { testimonialList } from '@/constants/services'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import { motion } from 'motion/react'

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-[url('/images/bg/testimonials-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5"></div>
          <motion.div
            className="col-span-12 md:col-span-7"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
              <CarouselContent className="ml-0">
                {testimonialList.map((testimonial) => (
                  <CarouselItem key={testimonial.name}>
                    <ClientsQuoteCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
