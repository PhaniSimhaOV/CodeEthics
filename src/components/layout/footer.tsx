import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Code Ethics Logo"
                width={150}
                height={50}
                className="rounded-lg"
              />
            </Link>
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{'<>'}</span>
              </div>
              <span className="font-bold text-xl">Code Ethics</span>
            </div> */}
            <p className="text-sm text-primary-foreground/80 mt-6">
              Delivering innovative IT solutions with integrity and professionalism. Empowering
              businesses with reliable technology services.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-primary-foreground/80 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+97 155 788 6713</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 83741 56296</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@codeethics.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Your Business Address Here</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to get updates on our latest services and offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Code Ethics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
