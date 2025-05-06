'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const titles = [
  'Full Stack Developer 👨‍💻',
  'Mobile App Developer ⚙️',
  'Creative Technologist 💡',
  'AI/ML Sorcerer 🤖'
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    const currentTitle = titles[index]

    if (!isDeleting && displayedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
        playTypingSound()
      }, 100)
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1))
      }, 50)
    } else if (displayedText.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, index])

  useEffect(() => {
    const canvas = document.getElementById('matrix')
    const ctx = canvas.getContext('2d')
    const fontSize = 16
    let drops = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isDark
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(255, 255, 255, 0.2)'

      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = isDark ? '#00b300' : '#00ff00'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    resizeCanvas()
    const interval = setInterval(draw, 33)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const playTypingSound = () => {
    const audio = new Audio('https://cdn.pixabay.com/audio/2023/10/12/12-14-49-180_200k.mp3')
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  return (
<section className="relative h-[70vh] md:h-screen flex items-center justify-center px-6 bg-background text-foreground overflow-hidden transition-colors">

      <canvas id="matrix" className="absolute inset-0 z-0 opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-mono animate-pulse">
          Initializing neural handshake...
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-foreground">
          Abhinav Dubey
        </h1>

        <h2 className="text-2xl md:text-3xl font-mono text-muted-foreground mb-6">
          {displayedText}
          <span className="inline-block w-2 h-5 bg-primary animate-cursor ml-1" />
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-all"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-all"
          >
            Let’s Connect
          </Link>
        </div>
      </div>

      <style jsx>{`
        .animate-cursor {
          animation: blink 0.6s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
