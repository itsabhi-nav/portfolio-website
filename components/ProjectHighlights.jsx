'use client'

import Link from 'next/link'
import ProjectCard from './ProjectCard'

const highlightedProjects = [
  {
    title: 'Smart Wheelchair Tracker',
    description:
      'Indoor airport navigation using accelerometers, Google Maps SDK, and React Native.',
    tech: ['React Native', 'Google Maps', 'AI'],
    github: 'https://github.com/ashutosh/wheelchair-tracker',
    live: 'https://wheelchair-tracker.vercel.app/'
  },
  {
    title: 'PadPal',
    description:
      'Bluetooth-powered sanitary pad vending machine built with Embedded C and Kotlin.',
    tech: ['Embedded C', 'Kotlin', 'HC-05'],
    github: 'https://github.com/ashutosh/padpal',
    live: '#'
  },
  {
    title: 'DailyScoop News',
    description:
      'An AI-curated news platform powered by Directus, Supabase, and LangChain.',
    tech: ['Next.js', 'LangChain', 'Supabase'],
    github: 'https://github.com/ashutosh/dailyscoop',
    live: '#'
  }
]

export default function ProjectHighlights() {
  return (
    <section className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">🚧 Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-foreground rounded-lg hover:bg-foreground hover:text-background transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
