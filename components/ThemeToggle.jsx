'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // prevents hydration mismatch

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded hover:bg-muted transition-all"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}