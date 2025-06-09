import Image from 'next/image'
import React from 'react'

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
    <section className="bg-[url('/images/bg/bg-blue.webp')] bg-cover bg-center py-16 lg:py-32">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-4 uppercase text-center sm:text-left">
          <div className="col-span-12 md:col-span-6">
            <div className="space-y-6 md:space-y-12">
              <h2 className="main-title leading-tight">{title}</h2>
              <p className="tracking-[.3em]">{description}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-full h-full flex justify-center items-center">
              <Image src={image} alt={title} width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlueBgSection
