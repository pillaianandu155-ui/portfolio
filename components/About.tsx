'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Tech Stacks' },
  { value: '100%', label: 'Dedication' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span
            className="text-xs font-mono text-[#7C3AED] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            01. about_me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="space-y-6">
            <h2
              className="animate-on-scroll text-4xl md:text-5xl font-bold leading-tight text-[#E2E2F0]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Turning complex{' '}
              <span className="text-[#A78BFA]">ideas</span> into{' '}
              <span className="text-[#14B8A6]">elegant</span> code
            </h2>

            <p className="animate-on-scroll text-[#6B6B7E] leading-relaxed text-lg">
              I'm Anandu Pillai, a software developer based in Maharashtra, India. I hold a 
              Bachelor's degree in Computer Science and a Master of Computer Applications (MCA), 
              which gave me a strong foundation in data structures, algorithms, software engineering, 
              and system design.
            </p>

            <p className="animate-on-scroll text-[#6B6B7E] leading-relaxed">
              My love for code started with simple scripts and grew into building full-stack 
              applications that solve real problems. I enjoy working across the entire stack — 
              crafting pixel-perfect UIs with React/Next.js and powering them with robust backends 
              in Node.js or Python.
            </p>

            <p className="animate-on-scroll text-[#6B6B7E] leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open source, 
              or levelling up my DSA skills. I believe in writing clean, maintainable code and 
              shipping products that actually make a difference.
            </p>

            {/* Quick facts */}
            <div className="animate-on-scroll grid grid-cols-2 gap-4 pt-4">
              {[
                ['Location', 'Maharashtra, India'],
                ['Degree', 'MCA (Master of Computer Applications)'],
                ['Focus', 'Full Stack Development'],
                ['Status', 'Open to work'],
              ].map(([key, val]) => (
                <div key={key} className="flex flex-col gap-1">
                  <span
                    className="text-xs text-[#7C3AED] font-mono uppercase tracking-widest"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {key}
                  </span>
                  <span className="text-[#E2E2F0] text-sm font-medium">{val}</span>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll pt-2">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7C3AED]/50 hover:border-[#7C3AED] text-[#A78BFA] hover:text-white hover:bg-[#7C3AED] rounded-xl font-semibold transition-all duration-200 text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <DownloadIcon />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: stats + visual */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="animate-on-scroll grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 card-hover group"
                >
                  <div
                    className="stat-number text-4xl text-[#A78BFA] group-hover:text-[#7C3AED] transition-colors mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {value}
                  </div>
                  <div className="text-[#6B6B7E] text-sm">{label}</div>
                </div>
              ))}
            </div>

            {/* Terminal card */}
            <div className="animate-on-scroll bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E2E] bg-[#0E0E18]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span
                  className="ml-2 text-xs text-[#6B6B7E]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  anandu@dev:~$
                </span>
              </div>
              <div
                className="p-5 text-sm space-y-1.5"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <div>
                  <span className="text-[#7C3AED]">const</span>{' '}
                  <span className="text-[#14B8A6]">developer</span>{' '}
                  <span className="text-[#E2E2F0]">= {'{'}</span>
                </div>
                <div className="pl-4 text-[#6B6B7E]">
                  name: <span className="text-[#F59E0B]">"Anandu Pillai"</span>,
                </div>
                <div className="pl-4 text-[#6B6B7E]">
                  education: <span className="text-[#F59E0B]">"B.Sc + MCA"</span>,
                </div>
                <div className="pl-4 text-[#6B6B7E]">
                  role: <span className="text-[#F59E0B]">"Full Stack Dev"</span>,
                </div>
                <div className="pl-4 text-[#6B6B7E]">
                  loves: <span className="text-[#A78BFA]">["React", "Node", "Coffee"]</span>,
                </div>
                <div className="pl-4 text-[#6B6B7E]">
                  available: <span className="text-green-400">true</span>,
                </div>
                <div className="text-[#E2E2F0]">{'}'};</div>
                <div className="pt-2 text-[#6B6B7E]">
                  <span className="text-[#7C3AED]">console</span>.log(
                  <span className="text-[#14B8A6]">developer</span>.name
                  <span className="text-[#E2E2F0]">)</span>
                </div>
                <div className="text-green-400">▶ Anandu Pillai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}