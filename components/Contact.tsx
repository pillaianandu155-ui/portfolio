'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span
            className="text-xs font-mono text-[#7C3AED] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            05. contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#E2E2F0] leading-tight mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Let's{' '}
                <span className="text-[#A78BFA]">work</span>{' '}
                together
              </h2>
              <p className="text-[#6B6B7E] leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hi — 
                my inbox is always open. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="animate-on-scroll space-y-4">
              {[
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'pillaianandu155@gmail.com',
                  href: 'mailto:pillaianandu155@gmail.com',
                  color: '#A78BFA',
                },
                {
                  icon: '💼',
                  label: 'LinkedIn',
                  value: 'anandu-pillai-944276320',
                  href: 'https://www.linkedin.com/in/anandu-pillai-944276320/',
                  color: '#14B8A6',
                },
                {
                  icon: '🐙',
                  label: 'GitHub',
                  value: 'pillaianandu155-ui',
                  href: 'https://github.com/pillaianandu155-ui',
                  color: '#F59E0B',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'Maharashtra, India',
                  href: null,
                  color: '#EC4899',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-[#111118] border border-[#1E1E2E] rounded-xl card-hover group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: item.color + '15', border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#6B6B7E] mb-0.5"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#E2E2F0] group-hover:text-[#A78BFA] transition-colors"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium text-[#E2E2F0]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability box */}
            <div className="animate-on-scroll p-5 bg-green-500/5 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span
                  className="text-green-400 font-semibold text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Currently Available
                </span>
              </div>
              <p className="text-[#6B6B7E] text-sm">
                Open to full-time roles, freelance projects, and interesting collaborations.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll">
            <form
              onSubmit={handleSubmit}
              className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs text-[#6B6B7E] font-mono uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#E2E2F0] placeholder-[#6B6B7E] focus:outline-none focus:border-[#7C3AED] transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#6B6B7E] font-mono uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#E2E2F0] placeholder-[#6B6B7E] focus:outline-none focus:border-[#7C3AED] transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs text-[#6B6B7E] font-mono uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration"
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#E2E2F0] placeholder-[#6B6B7E] focus:outline-none focus:border-[#7C3AED] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block text-xs text-[#6B6B7E] font-mono uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#E2E2F0] placeholder-[#6B6B7E] focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : status === 'sending'
                    ? 'bg-[#7C3AED]/50 text-white/70 cursor-not-allowed'
                    : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-0.5'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                  ? '✓ Message Sent!'
                  : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}