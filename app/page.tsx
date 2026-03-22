import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0F' }}>
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <Hero />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1E1E2E, transparent)' }} />
        <About />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1E1E2E, transparent)' }} />
        <Skills />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1E1E2E, transparent)' }} />
        <Projects />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1E1E2E, transparent)' }} />
        <Education />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1E1E2E, transparent)' }} />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}