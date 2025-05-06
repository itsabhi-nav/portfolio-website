'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const lines = [
  'Abhinav@dev:~$ whoami',
  '🧑 Full Stack Developer',
  '⚙️  Mobile App Developer',
  '💡 Creative Technologist',
  '🤖 AI/ML Enthusiast',
  '',
  'Abhinav@dev:~$ ls -l projects',
  '📁 Wheelchair Assistant App',
  '📁 MR Consultants',
  '📁 DailyScoop',
  '',
  'Abhinav@dev:~$ echo "Let\'s build something cool together 💥"',
]

export default function TerminalHeroIntro() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines, currentLine])

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const line = lines[lineIndex]
    const typingSpeed = 30
    const pauseAfterLine = 500

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + line[charIndex])
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line])
        setCurrentLine('')
        setCharIndex(0)
        setLineIndex((prev) => prev + 1)
      }, pauseAfterLine)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, lineIndex])

  const handleReplay = () => {
    setDisplayedLines([])
    setCurrentLine('')
    setLineIndex(0)
    setCharIndex(0)
  }

  return (
    <section className="py-12 px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border bg-[#1e1e1e] text-[#39ff14] font-mono text-sm shadow-lg"
      >
        {/* Terminal Header with replay button */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <button
            onClick={handleReplay}
            className="text-white/70 hover:text-white text-xs flex items-center gap-1"
          >
            <RefreshCw size={14} className="animate-spin-slow" />
            Replay
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="p-4 space-y-1 max-h-[300px] overflow-y-auto scroll-smooth scrollbar-hide"
        >
          {displayedLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          {lineIndex < lines.length && (
            <p>
              {currentLine}
              <span className="animate-pulse inline-block w-[8px]">█</span>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  )
}
