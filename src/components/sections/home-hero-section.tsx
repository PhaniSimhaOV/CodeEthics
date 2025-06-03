import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HomeHeroSection = () => {
  return (
    <section className="hero-gradient text-primary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Innovative IT Solutions
                </Badge> */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Code Ethics
                <span className="block text-3xl lg:text-5xl">technologies & Services.</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary/90 max-w-2xl">
                At Code Ethics, we are committed to delivering innovative IT solutions with
                integrity and professionalism. Our code of ethics emphasizes transparency,
                customer-first values, data security, and continuous improvement, ensuring reliable
                services that empower businesses and foster trust in every partnership.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Discover Now
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-image.png"
              alt="Code Ethics Team - Professional IT Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
