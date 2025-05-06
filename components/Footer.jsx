'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 px-6 py-10 border-t border-muted text-sm text-center text-muted-foreground bg-background">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-center gap-6">
          <Link href="/" className="hover:text-foreground transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-foreground transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-foreground transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-foreground transition">
            Contact
          </Link>
        </div>

        <p className="text-xs">
          &copy; {year} Ashutosh. Built with ❤️ using{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            Next.js
          </a>
          , TailwindCSS & LLMs.
        </p>
      </div>
    </footer>
  )
}
