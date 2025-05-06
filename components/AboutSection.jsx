'use client'

import { Separator } from '@/components/ui/separator'

export default function AboutSection() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">👋 About Me</h2>

      <p className="text-lg text-muted-foreground leading-8">
        I’m <span className="font-semibold text-foreground">Ashutosh</span>, a developer who blends
        software engineering with embedded systems to build real-world solutions.
      </p>

      <Separator className="my-8 w-24 mx-auto" />

      <p className="text-lg text-muted-foreground leading-8">
        From smart assistive devices like <span className="text-primary">PadPal</span> and
        vision-aiding sticks, to full-stack platforms using{' '}
        <strong className="text-foreground">Next.js, Supabase</strong> and{' '}
        <strong className="text-foreground">LangChain</strong>, I love building products that solve
        real problems.
      </p>

      <p className="text-lg text-muted-foreground leading-8 mt-6">
        I’ve interned at <strong className="text-foreground">Western Digital</strong> (firmware) and{' '}
        <strong className="text-foreground">Licious</strong> (ops-tech), and I’m currently building
        futuristic products powered by <span className="text-primary">AI, IoT</span>, and code.
      </p>

      <div className="mt-10 text-sm text-muted-foreground">
        <p>📍 Based in Bangalore &nbsp;&nbsp;|&nbsp;&nbsp;🤝 Open to collaborations</p>
      </div>
    </section>
  )
}
