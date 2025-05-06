'use client'

import Link from 'next/link'
import { formatDate } from '../utils/formatDate'
import { cn } from '@/lib/utils' // Optional utility

export default function BlogCard({ title, description, date, slug }) {
  return (
    <Link
      href={`/blog/${slug}`}
      role="article"
      aria-label={`Read blog: ${title}`}
      className={cn(
        'group block rounded-xl border border-muted p-6 transition-all backdrop-blur-md bg-background/80 shadow-sm',
        'hover:shadow-lg hover:border-primary hover:-translate-y-1 hover:scale-[1.02]'
      )}
    >
      {/* Date */}
      <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
        {formatDate(date)}
      </div>

      {/* Title */}
      <h3
        className={cn(
          'text-xl font-bold text-foreground mb-2 transition-all',
          'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500'
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {description || 'No description available.'}
      </p>
    </Link>
  )
}
