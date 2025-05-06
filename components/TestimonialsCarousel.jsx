'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'SAM Labs Team',
    title: 'Mentor @ RVCE SAM Labs',
    text: 'Abhinav has been pivotal in building the Smart Antenna Systems Lab’s web presence. He brought modern aesthetics, blazing performance, and tech reliability to our outreach.',
  },
  {
    name: 'Mallesh Reddy',
    title: 'Founder @ MR Consultants',
    text: 'The real estate portal developed by Abhinav is not just elegant—it’s business-ready. Integrated with WhatsApp, Cloudinary, and an admin panel, it exceeded our expectations.',
  },
  {
    name: 'IEEE APS-MTTS Bangalore Team',
    title: 'Chapter Web Coordinators',
    text: 'Abhinav’s commitment to maintaining our IEEE website has been exceptional. He ensured all workshops, events, and publications were always presented with clarity and structure.',
  },
  {
    name: 'Ishita Verma',
    title: 'Early User @ Greetify',
    text: 'Greetify’s automation saved me from forgetting birthdays! The email personalization and reminder features are simple yet genius. Abhinav made something truly helpful.',
  },
  {
    name: 'Dr. Shilpa Rao',
    title: 'Mentor @ LearnSync-AI, RVCE',
    text: 'From facial recognition to ChatDoc AI, Abhinav built a unified platform transforming academic support with AI—fast, intuitive, and future-proof.',
  },
  {
    name: 'Saurabh Singh',
    title: 'Managing Partner @ Saurabh Trading',
    text: 'Abhinav gave our electronics brand a digital identity with a stunning, responsive e-commerce landing. His work has real business impact.',
  }
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

  useEffect(() => {
    const autoSlide = setInterval(next, 10000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <section className="py-24 px-6 bg-muted/10">
      <h2 className="text-4xl font-bold text-center mb-14 tracking-tight">💬 Testimonials</h2>

      <div className="relative max-w-3xl mx-auto bg-background border border-border rounded-2xl px-8 py-10 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-3 text-muted-foreground">
              <Quote className="mt-1 w-5 h-5 text-primary shrink-0" />
              <p className="text-lg leading-relaxed italic">“{testimonials[index].text}”</p>
            </div>
            <div className="mt-6 text-right">
              <p className="font-bold text-foreground">{testimonials[index].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[index].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-muted/50 transition text-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5">
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-muted/50 transition text-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
