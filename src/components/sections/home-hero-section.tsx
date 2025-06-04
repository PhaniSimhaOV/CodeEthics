import React from 'react'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'

const HomeHeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-32 bg-[url('/images/line-bg.png')] bg-cover bg-center min-h-dvh flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Code Ethics & Technologies & Services.
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
              <Button size="lg" variant="link" asChild className="text-white">
                <Link href={appRoute.contact}>
                  Discover Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* <Image
          src="/images/10.png"
          alt="Code Ethics Team - Professional IT Solutions"
          width={1024}
          height={891}
          className="absolute bottom-0 right-0 top-[10%] z-[-1] object-contain"
        /> */}
      </div>
    </section>
  )
}

export default HomeHeroSection
