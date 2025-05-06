'use client'

import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CallToActionBanner() {
  return (
    <section className="relative isolate py-24 px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-muted/5 to-background">
      {/* Optional subtle grain/noise for texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-foreground">
          🚀 Let’s Build Something Incredible
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Got a product idea or an exciting opportunity in mind? Let’s connect and make it real — beautifully and efficiently.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild
            size="lg"
            className="text-base px-6 py-3 hover:scale-105 transition-transform"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-muted-foreground text-muted-foreground hover:bg-foreground hover:text-background transition"
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
