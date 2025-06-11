import React from 'react'
import './styles.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Code Ethics - Innovative IT Solutions & Services',
  description:
    'At Code Ethics, we are committed to delivering innovative IT solutions with integrity and professionalism. Our code of ethics emphasizes transparency, customer-first values, data security, and continuous improvement.',
  keywords:
    'IT solutions, software development, technology services, web development, mobile apps, digital transformation',
  authors: [{ name: 'Code Ethics' }],
  openGraph: {
    title: 'Code Ethics - Innovative IT Solutions & Services',
    description: 'Delivering innovative IT solutions with integrity and professionalism',
    url: 'https://www.codeethics.in',
    siteName: 'Code Ethics',
    type: 'website',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="dark overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  )
}
