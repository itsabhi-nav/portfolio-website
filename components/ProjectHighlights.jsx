'use client'

import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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

// animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

export default function ProjectHighlights() {
  return (
    <section className="relative py-28 px-6 bg-muted/5">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground tracking-tight">
          🧪 Curated with Code & Imagination
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlightedProjects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/projects">
            <Button
              size="lg"
              variant="default"
              className="text-base px-6 py-2 hover:scale-105 transition-transform"
            >
              Explore All Creations →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
