'use client'

import { useEffect, useState } from 'react'

const statsData = [
  { label: 'Projects Built', value: 18 },
  { label: 'Lines of Code', value: 120000 },
  { label: 'Hours Debugged', value: 750 },
  { label: 'Cups of Chai ☕', value: 420 }
]

export default function StatsCounter() {
  const [counts, setCounts] = useState(statsData.map(() => 0))

  useEffect(() => {
    const intervals = statsData.map((stat, i) => {
      const step = Math.ceil(stat.value / 60)
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev]
          if (updated[i] < stat.value) {
            updated[i] = Math.min(updated[i] + step, stat.value)
          }
          return updated
        })
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="bg-muted/5 px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">📊 My Developer Stats</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {statsData.map((stat, i) => (
          <div key={stat.label} className="bg-background p-6 rounded-lg shadow text-foreground">
            <p className="text-3xl font-bold">{counts[i].toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
