'use client'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'DevConnect',
    description: 'A social platform for developers to share projects, find collaborators, and network. Features real-time chat, project listings, and a skill-based matching system.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
    category: 'fullstack',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
    github: 'https://github.com/anandupillai/devconnect',
    live: 'https://devconnect.vercel.app',
    featured: true,
    icon: '🔗',
  },
  {
    title: 'TaskFlow',
    description: 'A Kanban-style project management tool with drag-and-drop, team collaboration, deadline tracking, and automated email notifications.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redux'],
    category: 'fullstack',
    gradient: 'from-[#14B8A6] to-[#6EE7E7]',
    github: 'https://github.com/anandupillai/taskflow',
    live: 'https://taskflow-app.vercel.app',
    featured: true,
    icon: '📋',
  },
  {
    title: 'WeatherNow',
    description: 'A beautiful weather application with 7-day forecasts, geolocation support, animated weather icons, and location search powered by OpenWeather API.',
    tags: ['React', 'API Integration', 'CSS Animations', 'Geolocation'],
    category: 'frontend',
    gradient: 'from-[#F59E0B] to-[#FCD34D]',
    github: 'https://github.com/anandupillai/weathernow',
    live: 'https://weathernow-app.vercel.app',
    featured: false,
    icon: '🌦️',
  },
  {
    title: 'ShopAPI',
    description: 'A RESTful e-commerce API with JWT authentication, product management, order processing, payment integration, and comprehensive API documentation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    category: 'backend',
    gradient: 'from-[#7C3AED] to-[#14B8A6]',
    github: 'https://github.com/anandupillai/shopapi',
    live: null,
    featured: false,
    icon: '🛒',
  },
  {
    title: 'CodeSnap',
    description: 'A VS Code extension that generates beautiful code screenshots with custom themes, watermarks, and one-click sharing to social media.',
    tags: ['TypeScript', 'VS Code API', 'Node.js'],
    category: 'tools',
    gradient: 'from-[#EC4899] to-[#A78BFA]',
    github: 'https://github.com/anandupillai/codesnap',
    live: null,
    featured: false,
    icon: '📸',
  },
  {
    title: 'BudgetBuddy',
    description: 'A personal finance tracker with expense categorization, monthly reports, charts, CSV export, and smart spending insights using data analysis.',
    tags: ['React', 'Chart.js', 'Python', 'FastAPI', 'SQLite'],
    category: 'fullstack',
    gradient: 'from-[#10B981] to-[#14B8A6]',
    github: 'https://github.com/anandupillai/budgetbuddy',
    live: 'https://budgetbuddy-app.vercel.app',
    featured: false,
    icon: '💰',
  },
]

const filters = ['all', 'fullstack', 'frontend', 'backend', 'tools']

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

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

  return (
    <section id="projects" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span
            className="text-xs font-mono text-[#7C3AED] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            03. projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
        </div>

        <div className="animate-on-scroll mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#E2E2F0] leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Things I've{' '}
            <span className="text-[#14B8A6]">built</span>
          </h2>
          <p className="text-[#6B6B7E] mt-4 max-w-xl">
            A selection of projects that showcase my range — from full-stack web apps to APIs, tools, and experiments.
          </p>
        </div>

        {/* Filters */}
        <div className="animate-on-scroll flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                activeFilter === f
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-[#111118] border border-[#1E1E2E] text-[#6B6B7E] hover:border-[#7C3AED]/50 hover:text-[#E2E2F0]'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="animate-on-scroll group relative bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden card-hover"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient}`}
              />

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 font-mono">
                    featured
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="text-3xl mb-4">{project.icon}</div>

                <h3
                  className="text-xl font-bold text-[#E2E2F0] mb-3 group-hover:text-[#A78BFA] transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {project.title}
                </h3>

                <p className="text-[#6B6B7E] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1E1E2E] text-[#6B6B7E] font-mono"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#6B6B7E] hover:text-[#A78BFA] transition-colors"
                  >
                    <GithubIcon />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#6B6B7E] hover:text-[#14B8A6] transition-colors"
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub */}
        <div className="animate-on-scroll text-center mt-12">
          <a
            href="https://github.com/anandupillai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6B6B7E] hover:text-[#A78BFA] transition-colors text-sm"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <GithubIcon />
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}