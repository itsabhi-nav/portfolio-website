'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b px-6 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition">
          Abhinav.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-primary transition ${
                pathname === item.href ? 'text-primary font-semibold underline' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close Menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-base transition ${
                        pathname === item.href ? 'font-semibold text-primary' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                {mounted && (
                  <Button
                    variant="outline"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="w-full mt-4"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="mr-2 h-4 w-4" /> Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="mr-2 h-4 w-4" /> Light Mode
                      </>
                    )}
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
