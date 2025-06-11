// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

'use client'

import AutoScroll from 'embla-carousel-auto-scroll'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { Client } from '@/payload-types'
import Link from 'next/link'

const ClientLogoSection = ({ logos }: { logos: Client[] }) => {
  return (
    <section>
      {logos && logos?.length > 0 ? (
        <div className="py-10 md:py-16 lg:py-20">
          <div className="container px-4 overflow-hidden">
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
              <CarouselContent className="ml-0">
                {[...logos, ...logos].map((logo, index) => (
                  <CarouselItem
                    key={logo.id + index}
                    className="flex basis-1/1 justify-center md:basis-1/3 lg:basis-1/6"
                  >
                    <div className="mx-10 flex shrink-0 items-center justify-center">
                      <Link href={logo?.website || '#'} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={typeof logo.logo === 'object' ? (logo.logo.url as string) : ''}
                          alt={logo.name}
                          height={100}
                          width={100}
                          className="h-23 w-23 object-cover block"
                        />
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ClientLogoSection
