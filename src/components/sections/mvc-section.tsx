import { mvcData } from '@/constants/about-page'
import Image from 'next/image'
import React from 'react'

const MvcSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 text-center">
        <h3 className="tertiary-title">Our Mission, Vision & Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
          {mvcData.map((item) => (
            <div className="flex flex-col items-center justify-center gap-4" key={item.title}>
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MvcSection
