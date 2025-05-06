'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
      const step = Math.ceil(stat.value / 50)
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev]
          if (updated[i] < stat.value) {
            updated[i] = Math.min(updated[i] + step, stat.value)
          }
          return updated
        })
      }, 25)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="bg-muted/5 px-6 py-28 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 tracking-tight text-foreground">
          📊 My Developer Stats
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-background border border-border rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-3xl font-bold text-foreground">
                {counts[i].toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
