'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, MessageSquare, X, Bot, User } from 'lucide-react'

export default function AIChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m Abhinav Bot 🤖 — Ask me anything about my portfolio!' }
  ])

  const scrollRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newUserMessage = { sender: 'user', text: input.trim() }
    setMessages((prev) => [...prev, newUserMessage])

    // Fake async bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `🤔 Hmm... thinking about "${input.trim()}"...` }
      ])
    }, 800)

    setInput('')
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all"
        aria-label="Toggle Chat"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat Container */}
      {open && (
        <div className="fixed bottom-20 right-6 z-40 w-[22rem] max-h-[34rem] flex flex-col bg-background/90 backdrop-blur-md border border-muted rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-4 text-sm font-semibold bg-muted/60 flex items-center gap-2 border-b border-border">
            <Bot size={16} /> ABHINAV BOT
          </div>

          {/* Chat Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-foreground scrollbar-thin"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="shrink-0 bg-muted p-1.5 rounded-full">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] leading-relaxed ${
                    msg.sender === 'bot'
                      ? 'bg-muted text-left'
                      : 'bg-primary text-background text-right'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="shrink-0 bg-primary p-1.5 rounded-full">
                    <User className="h-4 w-4 text-background" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <form onSubmit={handleSubmit} className="flex items-center border-t border-border">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="p-3 text-primary hover:text-primary/80 transition"
              aria-label="Send Message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
