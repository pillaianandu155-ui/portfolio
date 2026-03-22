'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1E1E2E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-[#A78BFA]">AP</span>
            <span className="text-[#6B6B7E] group-hover:text-[#E2E2F0] transition-colors">
              .dev
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                active === link.href
                  ? 'text-[#A78BFA]'
                  : 'text-[#6B6B7E] hover:text-[#E2E2F0]'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7C3AED] rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/30"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-[#E2E2F0] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#E2E2F0] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#E2E2F0] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111118] border-b border-[#1E1E2E] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-[#6B6B7E] hover:text-[#E2E2F0] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}