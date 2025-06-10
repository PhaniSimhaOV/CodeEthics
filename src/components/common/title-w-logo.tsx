'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const TitleWLogo = ({ title, description }: { title: string; description?: string }) => {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/cp-logo.png"
        alt="Code Ethics Logo"
        width={55}
        height={30}
        className="h-auto"
      />
      <h2 className="secondary-title">{title}</h2>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
    </motion.div>
  )
}

export default TitleWLogo
