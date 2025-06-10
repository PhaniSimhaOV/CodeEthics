import React, { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

type List = { id: string; text: string }
type DescriptionList = List & { title: string }

export interface TwoColumnLayoutProps {
  image: string
  caption?: string
  title: string
  list?: List[]
  description?: string
  descriptionList?: DescriptionList[]
  twoColumnDescription?: List[]
  buttonText?: string
  buttonVariant?: 'outline' | 'default'
  className?: string
  innerClassName?: string
  isReverse?: boolean
  children?: React.ReactNode
}

const TwoColumnLayout = ({
  image,
  caption,
  title,
  list,
  description,
  descriptionList,
  twoColumnDescription,
  buttonText,
  buttonVariant = 'outline',
  className,
  innerClassName,
  isReverse = false,
  children,
}: TwoColumnLayoutProps) => {
  return (
    <section className={cn('py-16', className)}>
      <div className="container px-4">
        <div
          className={cn(
            'flex flex-col gap-6 md:gap-12',
            isReverse ? 'md:flex-row-reverse' : 'md:flex-row',
            innerClassName,
          )}
        >
          <div className="w-full lg:w-[50%]">
            <div className="w-full h-full flex justify-center items-center">
              {/* media */}
              <Image src={image} alt={'media'} width={500} height={500} className="w-full h-auto" />
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="h-full flex flex-col justify-center gap-5">
              {/* content */}
              {caption ? (
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
              ) : null}
              <h3 className="secondary-title mb-4 md:mb-8">{title}</h3>

              {list && list.length
                ? list.map((item) => (
                    <Fragment key={item.id}>
                      <p className="text-muted-foreground font-semibold">{item.text}</p>
                      <Separator />
                    </Fragment>
                  ))
                : null}

              {description ? <p className="text-muted-foreground/70">{description}</p> : null}

              {descriptionList && descriptionList.length
                ? descriptionList.map((item) => (
                    <div key={item.id}>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground/70">{item.text}</p>
                    </div>
                  ))
                : null}

              {twoColumnDescription && twoColumnDescription.length ? (
                <div className="grid grid-cols-12 gap-4">
                  {twoColumnDescription.map((item) => (
                    <div
                      key={item.id}
                      className="col-span-12 md:col-span-6 flex flex-col gap-4 justify-between"
                    >
                      <p className="text-muted-foreground/70">{item.text}</p>
                      <Separator />
                    </div>
                  ))}
                </div>
              ) : null}

              {children ? children : null}

              {buttonText ? (
                <div>
                  <Button variant={buttonVariant} size={'lg'} asChild>
                    <Link href={appRoute.contact}>
                      {buttonText}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnLayout
