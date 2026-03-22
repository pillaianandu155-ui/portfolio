'use client'
import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'Backend Engineer',
  'Problem Solver',
  'Open Source Contributor',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111118] border border-[#1E1E2E] mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-[#6B6B7E] font-mono">Available for opportunities</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="block text-[#E2E2F0]">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#14B8A6] bg-clip-text text-transparent glow-text">
              Anandu Pillai
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-10 mb-8 flex items-center justify-center lg:justify-start">
            <span
              className="text-xl md:text-2xl text-[#A78BFA] font-medium terminal-cursor"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {displayed}
            </span>
          </div>

          <p className="text-[#6B6B7E] text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
            A passionate developer who loves crafting elegant, performant web experiences. 
            Armed with a B.Sc and MCA, I bridge the gap between clean design and rock-solid engineering.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-900/40 hover:-translate-y-0.5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-transparent border border-[#1E1E2E] hover:border-[#7C3AED] text-[#E2E2F0] font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            {[
              { label: 'GitHub', href: 'https://github.com/pillaianandu155-ui', icon: GithubIcon },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anandu-pillai-944276320/', icon: LinkedinIcon },
              { label: 'Email', href: 'mailto:pillaianandu155@gmail.com', icon: MailIcon },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6B6B7E] hover:text-[#A78BFA] transition-colors text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Avatar / graphic */}
        <div className="flex-shrink-0 relative animate-float">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#7C3AED]/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#14B8A6]/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

            {/* Avatar circle */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#14B8A6] flex items-center justify-center glow-purple">
              <span
                className="text-6xl font-black text-white select-none"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                AP
              </span>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 bg-[#111118] border border-[#1E1E2E] rounded-xl px-3 py-2 text-xs font-mono text-[#14B8A6] shadow-xl">
              &lt;/code&gt;
            </div>
            <div className="absolute -bottom-2 -left-4 bg-[#111118] border border-[#1E1E2E] rounded-xl px-3 py-2 text-xs font-mono text-[#A78BFA] shadow-xl">
              MCA grad
            </div>
            <div className="absolute top-1/2 -right-8 bg-[#111118] border border-[#1E1E2E] rounded-xl px-3 py-2 text-xs font-mono text-[#F59E0B] shadow-xl">
              3+ yrs
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B6B7E]">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#7C3AED] to-transparent" />
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}