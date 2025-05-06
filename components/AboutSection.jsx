'use client'

import { Separator } from '@/components/ui/separator'

export default function AboutSection() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">👋 About Me</h2>

      <p className="text-lg text-muted-foreground leading-8">
        I’m <span className="font-semibold text-foreground">Abhinav Dubey</span>, a passionate full
        stack developer and software engineer intern, blending creativity with technical expertise
        to build intuitive, scalable digital solutions.
      </p>

      <Separator className="my-8 w-24 mx-auto" />

      <p className="text-lg text-muted-foreground leading-8">
        From developing smart platforms like <span className="text-primary">MRConsultants</span> and
        <span className="text-primary"> SAM Labs</span>, to building cross-platform mobile apps and
        AI-powered tools, I enjoy crafting impactful products using technologies like{' '}
        <strong className="text-foreground">Next.js, React Native, Firebase, PostgreSQL, and
        Cloudinary</strong>.
      </p>

      <p className="text-lg text-muted-foreground leading-8 mt-6">
        Currently interning at <strong className="text-foreground">ArgenBright Innovation Labs</strong>,
        I’ve also worked with <strong className="text-foreground">IEEE APS-MTTS</strong> and
        <strong className="text-foreground"> Smart Antenna Systems Lab (RVCE)</strong>, building
        high-performance web applications with seamless UX, SSR, and real-time data flow.
      </p>

      <p className="text-lg text-muted-foreground leading-8 mt-6">
        I thrive in fast-paced environments, love solving complex problems, and believe in writing
        clean, maintainable code that scales.
      </p>

      <div className="mt-10 text-sm text-muted-foreground">
        <p>📍 Based in Bangalore &nbsp;&nbsp;|&nbsp;&nbsp;🤝 Always open to exciting collaborations</p>
      </div>
    </section>
  )
}
