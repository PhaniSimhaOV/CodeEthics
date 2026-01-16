'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'
import { motion } from 'motion/react'

const HomeHeroSection = () => {
  return (
    <section className="hero-gradient py-20 lg:py-32 bg-[url('/images/line-bg.png')] bg-cover bg-center min-h-dvh h-[120vh] flex items-center relative">
      <Floating sensitivity={-1} className="overflow-hidden hidden lg:block">
        <FloatingElement depth={1} className="top-[25%] left-[42%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={'/images/shape/slider_shape01.png'}
            className="duration-200"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="bottom-[55%] left-[12%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={'/images/shape/slider_shape02.png'}
            className="duration-200"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="bottom-[40%] left-[9%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={'/images/shape/slider_shape03.png'}
            className="duration-200"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="bottom-0 left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={'/images/shape/slider_shape04.png'}
            className="duration-200"
          />
        </FloatingElement>
      </Floating>
      <div className="absolute inset-0 w-full h-full md:bg-[url('/images/hero-image.png')] bg-cover bg-bottom-right -z-1"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 mb-42">
            <div className="space-y-4 text-center md:text-left">
              <motion.h2
                className="main-title leading-tight"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Code Ethics & Technologies & Services.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At Code Ethics, we are committed to delivering innovative IT solutions with
                integrity and professionalism. Our code of ethics emphasizes transparency,
                customer-first values, data security, and continuous improvement, ensuring reliable
                services that empower businesses and foster trust in every partnership.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Separator className="!w-[25%] bg-primary" />
              <Button size="lg" variant="link" asChild className="text-white">
                <Link href={appRoute.contact}>
                  Discover Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
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
