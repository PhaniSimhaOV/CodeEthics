import React from 'react'
import FaqList from '@/components/common/faq-list'
import Image from 'next/image'

const FaqSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        <h2 className="secondary-title mb-4 md:mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <p className="text-muted-foreground/70 mb-4">
              Find answers to common questions about our products, services, and policies. If you
              need further assistance, feel free to contact us.
            </p>
            <Image
              src={'/images/faq-img.png'}
              alt="faq"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
