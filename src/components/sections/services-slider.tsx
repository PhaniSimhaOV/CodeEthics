'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import { services } from '@/constants/services'
import ServiceCard from '@/components/cards/service-card'

const ServicesSlider = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">Our Best Services</h2>
          <p className="">Transform Your Business with Our Expert Services</p>
        </div>
        <div className="py-10 md:py-16 lg:py-20">
          <div className="relative mx-auto flex items-center justify-center overflow-hidden">
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: false })]}>
              <CarouselContent className="ml-0">
                {services.map((service) => (
                  <CarouselItem
                    key={service.id}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/6"
                  >
                    <ServiceCard {...service} className="max-w-[300px] select-none" />
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

export default ServicesSlider
