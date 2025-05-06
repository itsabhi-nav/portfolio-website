'use client'

import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CallToActionBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#4f46e5] to-[#9333ea] py-24 px-6 text-white shadow-2xl sm:rounded-3xl sm:px-12 border border-white/10 backdrop-blur-[6px]">
      {/* Background Glow */}
      <div className="absolute -inset-20 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400/20 via-fuchsia-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Glass Grain Overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow">
          🚀 Let’s Build Something Incredible
        </h2>
        <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
          Have a product in mind? Or just curious to collaborate? Let’s connect and create something
          impactful together.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild
            size="lg"
            className="text-base bg-white text-indigo-700 hover:text-white hover:bg-indigo-600 transition-shadow shadow-lg"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
             className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-indigo-700"
          >
            <Link href="/resume" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> View Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
