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
} from '../ui/card'
import { Button } from '../ui/button'

const ServiceCard = () => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="relative h-16 w-16">
          <Image
            src="/images/icons/sr-icon1.png"
            alt="Service icon"
            fill
            className="object-contain transition-opacity group-hover:opacity-0"
          />
          <Image
            src="/images/icons/sr-icon1-hover.png"
            alt="Service icon hover"
            fill
            className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
        <CardTitle>AMS Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Optimize digital transformation with our Application Management Services, ensuring peak
          performance, scalability, and enhanced security.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button asChild variant="link" className="group/btn">
            <Link href="/contact">
              Get Service
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-y-[-2px]" />
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
      <div className="absolute bottom-0 left-0 right-0">
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
