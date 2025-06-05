import React, { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

const TwoColumnLayout = ({
  image,
  caption,
  title,
  list,
  description,
  descriptionList,
  buttonText,
  buttonVariant = 'outline',
  className,
}: {
  image: string
  caption: string
  title: string
  list?: { id: string; text: string }[]
  description?: string
  descriptionList?: { id: string; title: string; text: string }[]
  buttonText: string
  buttonVariant?: 'outline' | 'default'
  className?: string
}) => {
  return (
    <section className={cn('py-16', className)}>
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 ">
            <div className="w-full flex justify-center items-center">
              {/* media */}
              <Image src={image} alt={'media'} width={500} height={500} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="h-full flex flex-col justify-center gap-5">
              {/* content */}
              <div className="flex gap-3">
                <Image
                  src="/images/cp-logo.png"
                  alt={'media'}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="uppercase font-semibold text-muted-foreground tracking-[.3em]">
                  {caption}
                </p>
              </div>
              <h3 className="secondary-title">{title}</h3>

              {list && list.length
                ? list.map((item) => (
                    <Fragment key={item.id}>
                      <p className="text-muted-foreground font-semibold">{item.text}</p>
                      <Separator />
                    </Fragment>
                  ))
                : null}

              <p className="text-muted-foreground">{description}</p>

              {descriptionList && descriptionList.length
                ? descriptionList.map((item) => (
                    <div key={item.id}>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))
                : null}

              <div>
                <Button variant={buttonVariant} size={'lg'} asChild>
                  <Link href={appRoute.contact}>
                    {buttonText}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnLayout
