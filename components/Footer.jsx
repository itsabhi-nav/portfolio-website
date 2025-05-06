'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-28 border-t border-border bg-background/80 backdrop-blur-md px-6 py-16 text-muted-foreground text-sm">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4 grid-cols-1">
        {/* Branding & CTA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Abhinav.dev</h2>
          <p className="text-muted-foreground text-sm">
            Full Stack Developer | React Native & Next.js enthusiast | Currently building smart,
            scalable, AI-powered apps at ArgenBright Innovation Labs.
          </p>
          <div className="flex space-x-3 mt-4">
            <Link href="https://github.com/itsabhi-nav" target="_blank" className="hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhinav-dubey-1694b4204/" target="_blank" className="hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:dubeyabhinav100@gmail.com" className="hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/its_abhi_nav" target="_blank" className="hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-foreground font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-foreground font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/resume" className="hover:text-foreground">Resume</Link></li>
            <li><Link href="https://nextjs.org" target="_blank" className="hover:text-foreground">Next.js</Link></li>
            <li><Link href="https://ui.shadcn.com" target="_blank" className="hover:text-foreground">shadcn/ui</Link></li>
            <li><Link href="https://openai.com" target="_blank" className="hover:text-foreground">LLMs / GPT</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-foreground font-semibold mb-3">Stay in the loop</h4>
          <p className="text-sm mb-4">Get occasional updates about new projects or posts.</p>
          <form className="flex gap-2">
            <Input placeholder="Your email" className="text-sm" />
            <Button type="submit" variant="default">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t pt-6 text-xs text-center text-muted-foreground border-border">
        &copy; {year} Abhinav. Built with ❤️ using{' '}
        <Link href="https://nextjs.org" className="underline hover:text-blue-500" target="_blank">
          Next.js
        </Link>
        , TailwindCSS, shadcn/ui & Express.js.
      </div>
    </footer>
  )
}
