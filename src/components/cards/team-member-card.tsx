'use client'

import React from 'react'
import Image from 'next/image'
import { Share2 } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion } from 'motion/react'

const TeamMemberCard = ({
  image,
  name,
  designation,
  linkedinUrl,
}: {
  image: string
  name: string
  designation: string
  linkedinUrl: string
}) => {
  return (
    <motion.div
      className="p-6 bg-accent"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Image src={image} alt={name} width={250} height={277} />
      <div className="flex gap-2 items-center justify-between mt-4">
        <div className="space-y-2">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="text-sm">{designation}</p>
        </div>
        <Button variant="outline" size="icon" asChild>
          <Link href={linkedinUrl} target="_blank">
            <Share2 />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

export default TeamMemberCard
