import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { appRoute } from '@/constants/routes'

const ServiceCard = ({
  title,
  description,
  image,
  hoverImage,
  className,
}: {
  title: string
  description: string
  image: string
  hoverImage: string
  className?: string
}) => {
  return (
    <Card
      className={cn(
        'relative bg-background group overflow-hidden pt-[30px] px-[7px] pb-[50px]',
        className,
      )}
    >
      <CardHeader>
        <div className="relative h-[125px] w-[108px]">
          <Image
            src={image}
            alt="Service icon"
            fill
            className="object-contain transition-opacity group-hover:opacity-0"
          />
          <Image
            src={hoverImage}
            alt="Service icon hover"
            fill
            className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
        <CardTitle className="text-2xl md:text-[32px] font-bold pt-[50px]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md mb-[20px]">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button asChild variant="secondary" className="group/btn cursor-pointer relative z-1">
            <Link href={appRoute.contact}>
              Get Service
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-y-[-2px]" />
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
      <div className="absolute -bottom-[130px] -right-[150px] -z-0 group-hover:bottom-0 group-hover:right-0 transition-all ease-in duration-500">
        <Image
          src="/images/bg/sr-h-bg.png"
          alt="Background decoration"
          width={400}
          height={100}
          className="w-full"
        />
      </div>
    </Card>
  )
}

export default ServiceCard
