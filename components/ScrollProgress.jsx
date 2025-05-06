'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const progress = (scrolled / height) * 100
      setScroll(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div
        className="h-1 bg-primary transition-all"
        style={{ width: `${scroll}%` }}
      />
    </div>
  )
}
