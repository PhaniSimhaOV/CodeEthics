'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import FaqList from '@/components/common/faq-list'

const FaqSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <motion.div
          className="secondary-title mb-4 md:mb-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.div>
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground/70 mb-4">
              Find answers to common questions about our products, services, and policies. If you
              need further assistance, feel free to contact us.
            </p>
            <Image
              src={'/images/faq-img.png'}
              alt="faq"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaqList />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
