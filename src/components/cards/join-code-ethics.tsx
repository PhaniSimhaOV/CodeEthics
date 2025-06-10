'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'
import { motion } from 'motion/react'

const JoinCodeEthics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="container px-4">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-6 justify-between  bg-[url('/images/bg/box-bg.png')] bg-contain bg-no-repeat bg-primary bg-position-[60%_100%] p-6 md:p-16">
          <h2 className="main-title leading-tight">Join the Code Ethics Community Today!</h2>
          <Button variant={'secondary'} size={'lg'} asChild>
            <Link href={appRoute.contact}>
              Explore Solutions With Us
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default JoinCodeEthics
