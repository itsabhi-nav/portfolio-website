'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="border border-muted rounded-xl p-5 hover:shadow-xl transition-all flex flex-col justify-between h-full bg-background">
      <div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-2 border-t border-muted pt-3">
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
