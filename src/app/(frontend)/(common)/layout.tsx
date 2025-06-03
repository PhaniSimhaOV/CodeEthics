import BreadcrumbSection from '@/components/layout/breadcrumb'
import React from 'react'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BreadcrumbSection />
      {children}
    </>
  )
}

export default CommonLayout
