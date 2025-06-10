'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import FloatingSky from '@/components/ui/floating'

const BlueBgSection = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <section className="bg-[url('/images/bg/bg-blue.webp')] bg-cover bg-center py-16 lg:py-32 relative">
      <FloatingSky
        src={'/images/shape/an-img-01.png'}
        className="duration-200 absolute bottom-20 left-20 hidden xl:block"
      />
      <FloatingSky
        src={'/images/shape/an-img-02.png'}
        className="duration-200 absolute top-20 left-50 hidden xl:block"
      />

      <div className="container px-4">
        <div className="grid grid-cols-12 gap-4 uppercase text-center sm:text-left">
          <div className="col-span-12 md:col-span-6">
            <motion.div
              className="space-y-6 md:space-y-12"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="main-title leading-tight">{title}</h2>
              <p className="tracking-[.3em]">{description}</p>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <motion.div
              className="w-full h-full flex justify-center items-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src={image} alt={title} width={500} height={500} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlueBgSection
