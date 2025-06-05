import Link from 'next/link'
import Image from 'next/image'
import { appRoute, navigation } from '@/constants/routes'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <>
      <footer className="bg-[url('/images/footer_bg.png')] bg-cover bg-center text-white">
        <div className="container mx-auto px-4 py-[80px] md:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo & Social Section */}
            <div className="space-y-6">
              <Link href={appRoute.home}>
                <Image
                  src="/images/logo.png"
                  alt="Code Ethics Logo"
                  width={250}
                  height={50}
                  className="rounded-lg"
                />
              </Link>

              <div className="flex gap-4 mt-4">
                <figure>
                  <Image
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    width={150}
                    height={150}
                    className="social-figure"
                  />
                  <figcaption>LinkedIn</figcaption>
                </figure>
                <figure>
                  <Image
                    src="/images/instagram.jpeg"
                    alt="Instagram"
                    width={150}
                    height={150}
                    className="social-figure"
                  />
                  <figcaption>Instagram</figcaption>
                </figure>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h6 className="text-lg font-semibold">Get Contact</h6>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-1 text-primary" />
                  <p>+91 74161 94172, +971 55 788 6713</p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="h-4 w-4">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    India Address: Honer Vivantis, Tellapur Road, Gopanpally, Hyderabad, Telangana,
                    India
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="h-4 w-4">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    UAE Address: Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United
                    Arab Emirates
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-1 text-primary" />
                  <p>info@codeethics.in</p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-1 text-primary" />
                  <p>nm@codeethics.in</p>
                </div>
              </div>
            </div>

            {/* Menu Section */}
            <div className="space-y-4">
              <h6 className="text-lg font-semibold">Menu</h6>
              <nav className="space-y-2">
                {navigation && navigation.length > 0 ? (
                  navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <></>
                )}
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-center md:text-left">
                Copyright © {new Date().getFullYear()}{' '}
                <Link href={appRoute.home} className="text-primary hover:underline">
                  codeethics
                </Link>
                . All rights reserved.
              </p>
              <Image
                src="/images/cp-logo.png"
                alt="Code Ethics Logo"
                width={55}
                height={30}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
