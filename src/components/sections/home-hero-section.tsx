import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Separator } from '../ui/separator'

const HomeHeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-32 bg-[url('/images/line-bg.png')] bg-cover bg-center min-h-dvh flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                Code Ethics & technologies & Services.
              </h2>
              <p>
                At Code Ethics, we are committed to delivering innovative IT solutions with
                integrity and professionalism. Our code of ethics emphasizes transparency,
                customer-first values, data security, and continuous improvement, ensuring reliable
                services that empower businesses and foster trust in every partnership.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Separator className="!w-[25%] bg-primary" />
              <Button size="lg" variant="link" className="text-white">
                Discover Now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
