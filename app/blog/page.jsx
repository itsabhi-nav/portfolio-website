'use client'

import BlogCard from '../../components/BlogCard'
import { useState } from 'react'

const blogPosts = [
  {
    title: 'Building a Smart Indoor Tracker with React Native',
    description: 'Learn how I used accelerometers, Google Maps SDK, and React Native to build airport wheelchair routing.',
    date: '2025-04-15',
    slug: 'smart-indoor-tracker'
  },
  {
    title: 'Optimizing API Costs with Google Maps & Places',
    description: 'Cost optimization strategies when using Google’s APIs at scale.',
    date: '2025-03-22',
    slug: 'google-maps-api-costs'
  },
  {
    title: 'Directus vs Strapi vs Sanity – What’s Best for You?',
    description: 'A real-world comparison while building the backend of DailyScoop.',
    date: '2025-03-10',
    slug: 'directus-vs-strapi-vs-sanity'
  }
]

export default function BlogPage() {
  const [search, setSearch] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <input
        type="text"
        placeholder="Search blog posts..."
        className="w-full mb-10 px-4 py-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-col gap-6">
        {filteredPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </section>
  )
}
