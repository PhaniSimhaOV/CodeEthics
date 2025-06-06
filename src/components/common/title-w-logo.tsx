import Image from 'next/image'
import React from 'react'

const TitleWLogo = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto">
      <Image
        src="/images/cp-logo.png"
        alt="Code Ethics Logo"
        width={55}
        height={30}
        className="h-auto"
      />
      <h2 className="secondary-title">{title}</h2>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export default TitleWLogo
