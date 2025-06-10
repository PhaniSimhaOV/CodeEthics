'use client'

import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const FloatingSky = ({ src, className }: { src: string; className?: string }) => {
  return (
    <motion.img
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [20, -20, 20],
        transition: {
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 0.5,
          },
        },
      }}
      src={src}
      className={cn('duration-300', className)}
    />
  )
}

export default FloatingSky
