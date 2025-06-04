'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import { appRoute, navigation } from '@/constants/routes'
import { useEffect, useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY >= 90)
      window?.addEventListener('scroll', () => {
        setIsScrolled(window.scrollY >= 90)
      })
    }
    return () => {
      if (typeof window !== 'undefined') {
        window?.removeEventListener('scroll', () => {})
      }
    }
  }, [])

  return (
    <header
      className={cn(
        'border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card py-2' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={appRoute.home}>
              <Image
                src="/images/logo.png"
                alt="Code Ethics Logo"
                width={196}
                height={40}
                className="rounded-lg"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-accent-foreground' : 'text-muted-foreground',
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p>+97 155 788 6713</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <p>nm@codeethics.in</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p>+91 83741 56296</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <p>info@codeethics.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <Sheet key={'mobile-menu'}>
              <SheetTrigger asChild>
                <Image src="/images/toggle-menu.png" alt="Menu" width={24} height={24} />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <div className="flex flex-col gap-4 py-8 px-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <Separator className="w-full mt-1 bg-primary h-[0.5px]" />
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
