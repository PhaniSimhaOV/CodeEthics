'use client'

import React from 'react'
import ContactForm from '@/components/forms/contact'
import {
  Clock8,
  Instagram,
  Linkedin,
  LocateFixed,
  MessageSquareMore,
  PhoneCall,
} from 'lucide-react'
import { Separator } from '../ui/separator'
import { motion } from 'motion/react'

const ContactUsSection = () => {
  return (
    <section className="pb-16 -mt-14">
      <div className="container mx-auto px-4">
        <div>
          <h3 className="tertiary-title my-10 lg:mb-20 text-center lg:text-left">
            Get in touch with Us
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              className="col-span-2 lg:col-span-1"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-6 lg:-mt-60 relative z-10 w-full">
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <PhoneCall className="w-8 h-8" />
                    <div>
                      <p className="text-muted-foreground">Contact Phone</p>
                      <h5 className="font-semibold">
                        +91 74161 94172
                        <br />
                        +971 55 788 6713
                      </h5>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10">
                      <LocateFixed className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Contact Location</p>
                      <h5 className="font-semibold">
                        India Address:
                        <br />
                        Honer Vivantis, Tellapur Road, Gopanpally, Hyderabad, Telangana, India
                        <br />
                        <br />
                        UAE Address:
                        <br />
                        Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab
                        Emirates
                      </h5>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <MessageSquareMore className="w-8 h-8" />
                    <div>
                      <p className="text-muted-foreground">Contact email</p>
                      <h5 className="font-semibold">
                        info@codeethics.in
                        <br />
                        nm@codeethics.in
                      </h5>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Clock8 className="w-8 h-8" />
                    <div>
                      <p className="text-muted-foreground">Office Timings</p>
                      <h5 className="font-semibold">Office open 10AM - 7PM</h5>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://www.instagram.com/ce_codeethics/?utm_source=qr&igsh=dGF0eWJqcmZqeXU2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      {/* <img src="/images/icons/instagram.png" alt="instagram" className="w-6 h-6" /> */}
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://in.linkedin.com/company/codeethicspvtltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      {/* <img src="/images/icons/linkedin.png" alt="linkedin" className="w-6 h-6" /> */}
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
