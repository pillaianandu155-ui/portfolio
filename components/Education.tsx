'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'NCRD s sterling Institute of management',
    location: 'Maharashtra, India',
    period: '2025 – 2027',
    grade: 'First Class with Distinction',
    description:
      'Specialized in advanced software engineering, cloud computing, machine learning fundamentals, and distributed systems. Completed thesis on "Optimizing RESTful API Performance in Microservices Architecture."',
    highlights: [
      'Thesis on Microservices API Optimization',
      'Machine Learning & AI coursework',
      'Cloud Computing & DevOps',
      'Advanced Data Structures & Algorithms',
      'Ranked in top 10% of the batch',
    ],
    color: '#A78BFA',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    institution: 'Pillai college of Arts,Commerce and Science',
    location: 'Maharashtra, India',
    period: '2022 – 2025',
    grade: 'First Class — 82%',
    description:
      'Built a strong foundation in programming, data structures, databases, operating systems, and computer networks. Developed multiple academic projects including a library management system and a student portal.',
    highlights: [
      'Core CS fundamentals & algorithms',
      'Database Management Systems',
      'Operating Systems & Networks',
      'Final Year Project: Library Management System',
      'Programming in C, Java, and Python',
    ],
    color: '#14B8A6',
    icon: '📚',
  },
]

const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023', color: '#F59E0B' },
  { name: 'The Complete Web Developer', issuer: 'Udemy / Zero to Mastery', year: '2022', color: '#A78BFA' },
  { name: 'React – The Complete Guide', issuer: 'Udemy / Maximilian Schwarzmüller', year: '2022', color: '#14B8A6' },
  { name: 'Python for Data Science', issuer: 'IBM via Coursera', year: '2023', color: '#EC4899' },
]

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section id="education" ref={sectionRef} className="py-28 bg-[#0D0D14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-16">
          <span
            className="text-xs font-mono text-[#7C3AED] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            04. education
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
        </div>

        <div className="animate-on-scroll mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#E2E2F0] leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Academic{' '}
            <span className="text-[#A78BFA]">journey</span>
          </h2>
          <p className="text-[#6B6B7E] mt-4 max-w-xl">
            A strong academic foundation in computer science paired with self-driven learning and professional certifications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED]/50 via-[#14B8A6]/30 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="animate-on-scroll relative md:pl-20"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-4 top-6 w-9 h-9 rounded-full items-center justify-center text-lg border-2 bg-[#0D0D14]"
                  style={{ borderColor: edu.color }}
                >
                  {edu.icon}
                </div>

                <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-7 card-hover group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="md:hidden text-lg">{edu.icon}</span>
                        <h3
                          className="text-xl font-bold text-[#E2E2F0] group-hover:text-[#A78BFA] transition-colors"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-[#6B6B7E] text-sm">{edu.institution}</p>
                      <p className="text-[#6B6B7E] text-sm">{edu.location}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="block text-sm font-mono px-3 py-1 rounded-full border mb-2"
                        style={{
                          color: edu.color,
                          borderColor: edu.color + '40',
                          backgroundColor: edu.color + '10',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {edu.period}
                      </span>
                      <span className="text-[#6B6B7E] text-xs">{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-[#6B6B7E] text-sm leading-relaxed mb-5">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#1E1E2E] text-[#6B6B7E]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-on-scroll mt-16">
          <h3
            className="text-2xl font-bold text-[#E2E2F0] mb-8"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Certifications &{' '}
            <span className="text-[#F59E0B]">Courses</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 card-hover group"
              >
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: cert.color }}
                />
                <p
                  className="font-semibold text-[#E2E2F0] text-sm mb-1 group-hover:text-[#A78BFA] transition-colors leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {cert.name}
                </p>
                <p className="text-[#6B6B7E] text-xs mb-2">{cert.issuer}</p>
                <p
                  className="text-xs font-mono"
                  style={{ color: cert.color, fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}