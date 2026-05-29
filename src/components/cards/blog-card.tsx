import { Blog } from '@/payload-types'
import { appRoute } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

const formatDate = (value?: string | null) => {
  if (!value) return ''
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const cover =
    typeof blog.coverImage === 'object' && blog.coverImage
      ? (blog.coverImage.url as string | undefined)
      : undefined

  return (
    <Link
      href={`${appRoute.blog}/${blog.slug}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-border bg-card transition-colors hover:border-primary"
    >
      <div className="relative w-full aspect-[16/9] bg-muted">
        {cover ? (
          <Image
            src={cover}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/5" />
        )}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{blog.author}</span>
          {blog.publishedAt ? <span>•</span> : null}
          {blog.publishedAt ? <time>{formatDate(blog.publishedAt)}</time> : null}
        </div>
        <h3 className="text-lg md:text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
          {blog.title}
        </h3>
        {blog.excerpt ? (
          <p className="text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        ) : null}
        {blog.tags && blog.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-1">
            {blog.tags.slice(0, 4).map((t) => (
              <span
                key={t.id ?? t.tag}
                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground"
              >
                {t.tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export default BlogCard
