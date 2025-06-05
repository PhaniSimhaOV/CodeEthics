import Image from 'next/image'
import React from 'react'

const TitleWLogo = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src="/images/cp-logo.png"
        alt="Code Ethics Logo"
        width={55}
        height={30}
        className="h-auto"
      />
      <h2 className="secondary-title">{title}</h2>
    </div>
  )
}

export default TitleWLogo
