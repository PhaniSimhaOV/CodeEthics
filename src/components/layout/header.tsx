'use client'

// import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  // const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>P: +97 155 788 6713</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>P: +91 83741 56296</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>E: info@codeethics.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{'<>'}</span>
              </div>
              <span className="font-bold text-xl">Code Ethics</span>
            </div> */}
            <Image
              src="/images/logo.png"
              alt="Code Ethics Logo"
              width={150}
              height={50}
              className="rounded-lg bg-primary"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === item.href ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  )
}
