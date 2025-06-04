// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { Client } from '@/payload-types'
import Link from 'next/link'

const ClientLogoSection = ({ logos }: { logos: Client[] }) => {
  return (
    <section>
      <div className="py-10 md:py-16 lg:py-20">
        <div className="relative mx-auto flex items-center justify-center overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({ playOnInit: true }),
              Autoplay({
                playOnInit: true,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <Link href={logo?.website || '#'} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={typeof logo.logo === 'object' ? (logo.logo.url as string) : ''}
                        alt={logo.name}
                        height={100}
                        width={100}
                        className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-cover"
                      />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default ClientLogoSection
