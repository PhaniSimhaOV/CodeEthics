'use client'

import React from 'react'
import Link from 'next/link'
import { appRoute, routeMap } from '@/constants/routes'
import { usePathname } from 'next/navigation'

const BreadcrumbSection = () => {
  const pathname = usePathname()
  const routeName = routeMap[pathname as keyof typeof routeMap]

  return (
    <div>
      <section className="flex items-center bg-[url('/images/bdrc-bg.png')] bg-cover bg-center min-h-[506px]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="w-full">
              <div className="text-center">
                <div className="mb-6">
                  <h2 className="font-bold text-4xl md:text-6xl">{routeName}</h2>
                  <nav className="mt-6">
                    <ul className="flex items-center justify-center space-x-2">
                      <li>
                        <Link
                          href={appRoute.home}
                          className="text-muted-foreground font-medium hover:text-primary/80"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <span className="mx-2">/</span>
                      </li>
                      <li className="text-primary font-medium" aria-current="page">
                        {routeName}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BreadcrumbSection
