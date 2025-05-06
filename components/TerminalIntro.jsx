'use client'

import { useEffect, useState } from 'react'

const lines = [
  'Ashutosh@dev:~$ whoami',
  '🧑 Full Stack Developer',
  '⚙️  Embedded Systems Enthusiast',
  '🤖 Builder of AI x IoT Products',
  '',
  'Ashutosh@dev:~$ ls -l projects',
  '📁 Smart Wheelchair',
  '📁 PadPal',
  '📁 DailyScoop',
  '',
  'Ashutosh@dev:~$ echo "Let\'s build something cool together 💥"',
]

export default function TerminalIntro() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + lines[lineIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]])
        setCurrentLine('')
        setCharIndex(0)
        setLineIndex((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, lineIndex])

  return (
    <div className="bg-[#1e1e1e] text-[#39ff14] font-mono text-sm rounded-xl p-6 mt-10 shadow-lg max-w-3xl mx-auto">
      <div className="space-y-1">
        {displayedLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {lineIndex < lines.length && <p>{currentLine}<span className="animate-pulse">█</span></p>}
      </div>
    </div>
  )
}
