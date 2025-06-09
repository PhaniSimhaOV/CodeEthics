'use client'

import React from 'react'
import { servicesMarquee } from '@/constants/services'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const ServicesMarquee = () => {
  return (
    <div className="h-[100px] bg-accent">
      <div className="-rotate-3 bg-card">
        <Carousel opts={{ loop: true }} plugins={[AutoScroll({})]}>
          <CarouselContent className="ml-0 gap-4 items-center h-[100px]">
            {servicesMarquee.map((service) => (
              <CarouselItem
                key={service}
                className="flex basis-1/1 justify-center pl-0 md:basis-1/2 lg:basis-1/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-center">{service}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default ServicesMarquee
