'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, MessageSquare, X, Bot, User } from 'lucide-react'

export default function AIChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m AshutoshBot 🤖 — Ask me anything about my portfolio!' }
  ])

  const scrollRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newUserMessage = { sender: 'user', text: input.trim() }
    setMessages((prev) => [...prev, newUserMessage])

    // Fake response delay (replace with fetch call later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `🤔 Let me think about "${input.trim()}"...` }
      ])
    }, 800)

    setInput('')
  }

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-background p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Toggle Chat"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat UI */}
      {open && (
        <div className="fixed bottom-20 right-6 z-40 w-80 bg-background border border-muted rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 text-sm font-semibold bg-muted text-foreground flex items-center gap-2">
            <Bot size={16} /> AshutoshBot
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="p-3 flex-1 overflow-y-auto max-h-80 space-y-3 text-sm text-foreground scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="bg-muted p-2 rounded-full">
                    <Bot size={14} className="text-muted-foreground" />
                  </div>
                )}

                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.sender === 'bot'
                      ? 'bg-muted text-left'
                      : 'bg-primary text-background text-right'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="bg-primary p-2 rounded-full">
                    <User size={14} className="text-background" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex border-t border-muted bg-background"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none"
              placeholder="Ask something..."
            />
            <button
              type="submit"
              className="px-4 text-primary hover:text-primary/80 transition"
              aria-label="Send"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
