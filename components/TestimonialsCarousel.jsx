'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Ravi Kumar',
    title: 'Tech Lead @ Licious',
    text: 'Ashutosh streamlined our crate logistics workflow in under a week. Stellar execution and clear communication!',
  },
  {
    name: 'Sneha Rao',
    title: 'Project Mentor @ RVCE',
    text: 'His PadPal project was not just innovative but extremely well engineered at the embedded level.',
  },
  {
    name: 'Aman Yadav',
    title: 'CTO @ DailyScoop',
    text: 'One of the most intuitive full-stack devs I’ve worked with. His blend of AI + backend is game-changing.',
  }
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  useEffect(() => {
    const autoSlide = setInterval(next, 8000)
    return () => clearInterval(autoSlide)
  }, [index])

  return (
    <section className="py-20 px-6 bg-muted/10">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>

      <div className="max-w-3xl mx-auto bg-background border rounded-xl p-8 relative shadow-md">
        <p className="text-lg leading-relaxed text-muted-foreground mb-6 italic">
          “{testimonials[index].text}”
        </p>
        <div className="text-right">
          <p className="font-bold text-foreground">{testimonials[index].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[index].title}</p>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <button onClick={prev} className="p-2 rounded-full hover:bg-muted transition">
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button onClick={next} className="p-2 rounded-full hover:bg-muted transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
