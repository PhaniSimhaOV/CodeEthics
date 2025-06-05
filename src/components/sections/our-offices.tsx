import Image from 'next/image'
import React from 'react'

const OurOffices = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4">
        {!hideTitle ? (
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/images/cp-logo.png"
              alt="Code Ethics Logo"
              width={55}
              height={30}
              className="h-auto"
            />
            <h2 className="secondary-title">Our Offices</h2>
          </div>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-10 lg:px-36">
          <div className="flex flex-col gap-4">
            {/* show map here */}
            <h3 className="text-2xl font-bold">Hyderabad, IN</h3>
            <div className="w-full h-[300px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.111164149648!2d78.28540840000001!3d17.458383899999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932e136db4f1%3A0xe70f8e0e4a528c8f!2sHoner%20Vivantis!5e0!3m2!1sen!2sin!4v1731645939543!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hue-rotate-[300deg]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Dubai, UAE</h3>
            <div className="w-full h-[300px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927579.8073618753!2d54.63429349735307!3d24.74889033249071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651c2438dc53%3A0xe6abcc1ea38a17f5!2sD1%20-%20Dubai%20Digital%20Park!5e0!3m2!1sen!2sin!4v1732010402055!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hue-rotate-[45deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurOffices
