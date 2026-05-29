import React from 'react'
import { fetchBlogs } from '@/services'
import BlogCard from '@/components/cards/blog-card'
import JoinCodeEthics from '@/components/cards/join-code-ethics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Code Ethics',
  description:
    'Insights, engineering notes and updates from the Code Ethics team — modern web platforms, CRM, AI integrations and more.',
}

const BlogIndexPage = async () => {
  const result = await fetchBlogs()
  const blogs = result?.docs ?? []

  return (
    <>
      <section className="pt-24 md:pt-40 pb-12 md:pb-20">
        <div className="container px-4">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Our Blog</p>
          <h1 className="main-title leading-tight max-w-3xl">
            Notes from the Code Ethics team.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Practical writing on the platforms, integrations and AI features we build for our
            partners. Updated as we ship.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container px-4">
          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h3 className="tertiary-title mb-3">No posts published yet</h3>
              <p className="text-muted-foreground max-w-md">
                Posts added via the admin dashboard at <code>/admin</code> will appear here once
                marked as published.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogs.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          )}
        </div>
      </section>

      <JoinCodeEthics />
    </>
  )
}

export default BlogIndexPage
