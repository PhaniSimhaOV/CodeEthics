import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { TestimonialCardProps } from './testimonial-card'

const ClientsQuoteCard = ({ name, quote, company }: TestimonialCardProps) => {
  return (
    <div>
      <div>
        <h3 className="tertiary-title mb-2">{name}</h3>
        <Image src="/images/icons/review-icon.png" alt="logo" width={82} height={24} />
      </div>
      <div className="my-4 md:my-8">
        {quote ? <p className="text-2xl md:text-3xl/normal">{`"${quote}"`}</p> : null}
      </div>
      <div className="flex items-center justify-between gap-4 mt-auto">
        <p className="text-muted-foreground">{company}</p>
        <Separator className="!w-1/2" />
        <div>
          <Image
            src="/images/icons/qt-icon.png"
            alt="star"
            width={50}
            height={50}
            className="h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientsQuoteCard
