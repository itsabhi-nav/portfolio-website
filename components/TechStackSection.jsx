'use client'

import { FaReact, FaNodeJs, FaGithub, FaAndroid, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiFlutter, SiArduino, SiPostgresql, SiPython } from 'react-icons/si'
import { motion } from 'framer-motion'

const stack = [
  { icon: <SiNextdotjs size={40} />, label: 'Next.js' },
  { icon: <FaReact size={40} />, label: 'React / React Native' },
  { icon: <FaNodeJs size={40} />, label: 'Node.js' },
  { icon: <SiTailwindcss size={40} />, label: 'Tailwind CSS' },
  { icon: <SiSupabase size={40} />, label: 'Supabase' },
  { icon: <SiPostgresql size={40} />, label: 'PostgreSQL' },
  { icon: <FaAndroid size={40} />, label: 'Kotlin / Android' },
  { icon: <SiFlutter size={40} />, label: 'Flutter / Dart' },
  { icon: <FaGitAlt size={40} />, label: 'Git & GitHub' },
  { icon: <SiArduino size={40} />, label: 'Embedded C / Arduino' },
  { icon: <SiPython size={40} />, label: 'Python / ML' },
]

export default function TechStackSection() {
  return (
    <section className="py-20 px-6 bg-muted/5">
      <h2 className="text-3xl font-bold text-center mb-12">🧰 My Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
        {stack.map((tech, idx) => (
          <motion.div
            key={tech.label}
            className="flex flex-col items-center justify-center hover:scale-110 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="text-foreground">{tech.icon}</div>
            <p className="mt-2 text-sm text-muted-foreground">{tech.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

