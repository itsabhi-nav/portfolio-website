'use client'

import { useEffect, useState, useRef } from 'react'
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
  const canvasRef = useRef(null)

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
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  const playTypingSound = () => {
    const audio = new Audio('https://cdn.pixabay.com/audio/2023/10/12/12-14-49-180_200k.mp3')
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden bg-black">
      <canvas id="matrix" className="absolute inset-0 z-0 opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-green-400 mb-4 font-mono animate-pulse">
          Initializing neural handshake...
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">
          Abhinav Dubey
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-green-300 mb-6">
          {displayedText}<span className="inline-block w-2 h-5 bg-green-400 animate-cursor ml-1" />
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-2 rounded border border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition-all"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-black transition-all"
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
