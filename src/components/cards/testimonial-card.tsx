import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import Image from 'next/image'

export type TestimonialCardProps = {
  name: string
  image?: string
  quote: string
  company: string
}

const TestimonialCard = ({ name, image, quote, company }: TestimonialCardProps) => {
  return (
    <Card className="md:px-5 md:py-12 bg-[url('/images/bg/box-bg.png')] bg-no-repeat bg-cover bg-card/20">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="size-16 md:size-21">
          <AvatarImage src={image || ''} alt={name} />
          <AvatarFallback className="text-xl font-bold">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg md:text-xl font-bold">{name}</CardTitle>
          <Image src="/images/icons/review-icon.png" alt="logo" width={82} height={24} />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-xl md:text-2xl">
          {`"${quote || ''}"`}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-4 mt-auto">
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
      </CardFooter>
    </Card>
  )
}

export default TestimonialCard
