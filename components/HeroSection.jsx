'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const titles = [
  'Full Stack Developer 👨‍💻',
  'Mobile App Developer ⚙️',
  'Creative Technologist 💡',
  'AI/ML 🤖'
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let timeout
    if (displayedText.length < titles[index].length) {
      timeout = setTimeout(() => {
        setDisplayedText(titles[index].slice(0, displayedText.length + 1))
      }, 70)
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('')
        setIndex((prev) => (prev + 1) % titles.length)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [displayedText, index])

  return (
    <section className="h-screen flex items-center justify-center text-center px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
          Welcome to my universe
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="text-primary">Abhinav</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-mono h-6 text-muted-foreground mb-6">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="/projects"
            className="px-6 py-2 rounded bg-foreground text-background hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded border border-foreground hover:bg-foreground hover:text-background transition"
          >
            Let’s Connect
          </Link>
        </div>
      </div>
    </section>
  )
}
