import Image from 'next/image'
import React from 'react'

const mvcData = [
  {
    icon: '/images/icons/handshake.png',
    title: 'Mission',
    description:
      'To partner with our customers to provide the best in class services to meet their business priorities efficiently & effectively.',
  },
  {
    icon: '/images/icons/bar-chart.png',
    title: 'Vision',
    description:
      'To be a leading service provider through green solutions & sustainable business growth.',
  },
  {
    icon: '/images/icons/puzzle.png',
    title: 'Core Values',
    description:
      'We follow Core Ethics: Creativity, Open Mindedness, Dynamics, Enthusiasm, Excellence, Trust, Humility, Integrity, Curiosity & Simplicity.',
  },
]

const MvcSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Our Mission, Vision & Core Values</h2>
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
