'use client'

import React from 'react'
import ServiceCard from '@/components/cards/service-card'
import { services } from '@/constants/services'
import { motion } from 'motion/react'

const ServicesLists = () => {
  return (
    <section className="bg-[url('/images/line-bg.png')] bg-scroll">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              key={service.id}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesLists
