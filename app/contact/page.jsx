'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

      {submitted ? (
        <div className="text-center text-lg">Thank you! I’ll get back to you soon 🙌</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message..."
            rows={6}
            className="w-full px-4 py-2 border rounded"
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 rounded bg-foreground text-background hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}
