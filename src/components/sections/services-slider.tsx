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
          <h2 className="main-title">Our Best Services</h2>
          <p>Transform Your Business with Our Expert Services</p>
        </div>
        <div className="py-10 md:py-16 lg:py-20">
          <div>
            <Carousel
              plugins={[AutoScroll({ playOnInit: true })]}
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent className="ml-0">
                {services.map((service) => (
                  <CarouselItem
                    key={service.id}
                    className="flex basis-1/1 justify-center pl-0 md:basis-1/2 lg:basis-1/4 mx-2"
                  >
                    <ServiceCard {...service} className="select-none" />
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
