import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { appRoute } from '@/constants/routes'

const JoinCodeEthics = () => {
  return (
    <div>
      <div className="container px-4">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-6 justify-between  bg-[url('/images/bg/box-bg.png')] bg-contain bg-no-repeat bg-primary bg-position-[60%_100%] p-6 md:p-16">
          <h2 className="main-title leading-tight">Join the Code Ethics Community Today!</h2>
          <Button variant={'secondary'} size={'lg'} asChild>
            <Link href={appRoute.contact}>
              Explore Solutions With Us
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JoinCodeEthics
