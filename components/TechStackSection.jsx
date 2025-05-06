'use client'

import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiFirebase,
  SiCloudinary
} from 'react-icons/si'
import { motion } from 'framer-motion'

const stack = [
  { icon: <FaHtml5 size={40} />, label: 'HTML' },
  { icon: <FaCss3Alt size={40} />, label: 'CSS' },
  { icon: <SiNextdotjs size={40} />, label: 'Next.js' },
  { icon: <FaReact size={40} />, label: 'React Native' },
  { icon: <FaNodeJs size={40} />, label: 'Node.js' },
  { icon: <SiTailwindcss size={40} />, label: 'Tailwind CSS' },
  { icon: <SiFirebase size={40} />, label: 'Firebase' },
  { icon: <SiCloudinary size={40} />, label: 'Cloudinary' },
  { icon: <SiSupabase size={40} />, label: 'Supabase' },
  { icon: <SiPostgresql size={40} />, label: 'PostgreSQL' },
  { icon: <FaGitAlt size={40} />, label: 'Git & GitHub' },
  { icon: <SiPython size={40} />, label: 'Python / ML' }
]

export default function TechStackSection() {
  return (
    <section className="py-24 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-foreground">
          🧰 My Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {stack.map((tech, idx) => (
            <motion.div
              key={tech.label}
              className="flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="text-foreground group-hover:text-primary transition-colors duration-200">
                {tech.icon}
              </div>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
