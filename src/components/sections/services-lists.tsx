import React from 'react'
import ServiceCard from '@/components/cards/service-card'
import { services } from '@/constants/services'

const ServicesLists = () => {
  return (
    <div className="bg-[url('/images/line-bg.png')] bg-scroll">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-6 md:mx-16 my-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesLists
