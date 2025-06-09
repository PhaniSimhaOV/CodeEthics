'use client'

import React from 'react'
import ClientsQuoteCard from '@/components/cards/clients-quote-card'
import { testimonialList } from '@/constants/services'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-[url('/images/bg/testimonials-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5"></div>
          <div className="col-span-12 md:col-span-7">
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: false })]}>
              <CarouselContent className="ml-0">
                {testimonialList.map((testimonial) => (
                  <CarouselItem key={testimonial.name}>
                    <ClientsQuoteCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
