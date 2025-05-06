'use client'

import ProjectCard from '../../components/ProjectCard'
import { useState } from 'react'

const projectList = [
  {
    title: 'Smart Wheelchair Tracker',
    description: 'Indoor navigation for airports using React Native, Google Maps SDK, and accelerometers.',
    tech: ['React Native', 'Google Maps', 'AI'],
    github: 'https://github.com/ashutosh/wheelchair-tracker',
    live: 'https://wheelchair-tracker.vercel.app/'
  },
  {
    title: 'PadPal',
    description: 'Sanitary pad vending machine integrated with Android and embedded protocols.',
    tech: ['Embedded C', 'Bluetooth', 'Kotlin'],
    github: 'https://github.com/ashutosh/padpal',
    live: '#'
  },
  {
    title: 'DailyScoop News',
    description: 'AI-curated news aggregator using Directus, Supabase, and LangChain.',
    tech: ['Next.js', 'Supabase', 'LangChain'],
    github: 'https://github.com/ashutosh/dailyscoop',
    live: '#'
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.tech.includes(filter))

  const techTags = ['All', 'React Native', 'AI', 'Next.js', 'Kotlin', 'Embedded C']

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {techTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full border hover:bg-foreground hover:text-background transition ${
              filter === tag ? 'bg-foreground text-background' : ''
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}