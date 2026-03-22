'use client'
import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: '#A78BFA',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    color: '#14B8A6',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'Python', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    color: '#F59E0B',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
    ],
  },
]

const techIcons = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Tailwind',
  'Express', 'GraphQL', 'Redux', 'Jest', 'Linux',
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

            // Trigger skill bars
            const bars = entry.target.querySelectorAll('.skill-bar-fill') as NodeListOf<HTMLElement>
            bars.forEach((bar) => {
              const target = bar.getAttribute('data-width') || '0'
              setTimeout(() => { bar.style.width = target + '%' }, 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 bg-[#0D0D14] relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span
            className="text-xs font-mono text-[#7C3AED] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            02. skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
        </div>

        <div className="animate-on-scroll mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#E2E2F0] leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            My technical{' '}
            <span className="text-[#A78BFA]">arsenal</span>
          </h2>
          <p className="text-[#6B6B7E] mt-4 max-w-xl">
            A curated set of tools and technologies I use to build modern web applications from concept to deployment.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="animate-on-scroll bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}` }}
                />
                <h3
                  className="font-bold text-[#E2E2F0] text-lg"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="text-sm text-[#E2E2F0] font-medium"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: cat.color, fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#1E1E2E] rounded-full skill-bar overflow-hidden">
                      <div
                        className="skill-bar-fill rounded-full"
                        style={{
                          width: '0%',
                          background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                          boxShadow: `0 0 8px ${cat.color}60`,
                        }}
                        data-width={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech bubble scroll */}
        <div className="animate-on-scroll">
          <p
            className="text-xs text-[#6B6B7E] font-mono uppercase tracking-widest mb-6 text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#111118] border border-[#1E1E2E] rounded-full text-sm text-[#6B6B7E] hover:text-[#A78BFA] hover:border-[#7C3AED]/50 transition-all duration-200 cursor-default"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}