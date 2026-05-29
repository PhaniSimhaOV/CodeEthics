import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

import { fetchBlogBySlug } from '@/services'
import { appRoute } from '@/constants/routes'
import { RichText } from '@payloadcms/richtext-lexical/react'
import JoinCodeEthics from '@/components/cards/join-code-ethics'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Params = { slug: string }

const formatDate = (value?: string | null) => {
  if (!value) return ''
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = await fetchBlogBySlug(slug)
  if (!blog) {
    return { title: 'Post not found | Code Ethics' }
  }
  return {
    title: `${blog.title} | Code Ethics`,
    description: blog.excerpt ?? undefined,
    openGraph: {
      title: blog.title,
      description: blog.excerpt ?? undefined,
      type: 'article',
      authors: blog.author ? [blog.author] : undefined,
      publishedTime: blog.publishedAt ?? undefined,
    },
  }
}

const BlogDetailPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params
  const blog = await fetchBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const cover =
    typeof blog.coverImage === 'object' && blog.coverImage
      ? (blog.coverImage.url as string | undefined)
      : undefined

  return (
    <>
      <article className="pt-24 md:pt-40 pb-16 md:pb-24">
        <div className="container px-4 max-w-3xl">
          <Link
            href={appRoute.blog}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          <header className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary mb-4">
              <span>{blog.author}</span>
              {blog.publishedAt ? <span>•</span> : null}
              {blog.publishedAt ? <time>{formatDate(blog.publishedAt)}</time> : null}
            </div>
            <h1 className="main-title leading-tight">{blog.title}</h1>
            {blog.excerpt ? (
              <p className="mt-5 text-lg text-muted-foreground">{blog.excerpt}</p>
            ) : null}
            {blog.tags && blog.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-6">
                {blog.tags.map((t) => (
                  <span
                    key={t.id ?? t.tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t.tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {cover ? (
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 md:mb-14">
              <Image src={cover} alt={blog.title} fill sizes="100vw" className="object-cover" />
            </div>
          ) : null}

          <div className="blog-body">
            <RichText data={blog.body as SerializedEditorState} />
          </div>
        </div>
      </article>

      <JoinCodeEthics />
    </>
  )
}

export default BlogDetailPage
