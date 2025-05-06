'use client'

import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="border border-border bg-background/70 backdrop-blur-md rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-between items-center pt-3 mt-auto border-t border-border">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm hover:text-primary transition"
        >
          <Github size={16} /> GitHub
        </a>
        {live && live !== '#' && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary transition"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  )
}
