'use client'

import React from 'react'
import { mvcData } from '@/constants/about-page'
import Image from 'next/image'
import { motion } from 'motion/react'

const MvcSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 text-center">
        <motion.h3
          className="tertiary-title"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Mission, Vision & Core Values
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
          {mvcData.map((item, index) => (
            <motion.div
              className="flex flex-col items-center justify-center gap-4"
              key={item.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MvcSection
