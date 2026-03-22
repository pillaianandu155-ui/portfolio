import type { Metadata } from 'next'
import { Syne, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Anandu Pillai — Full Stack Developer',
  description: 'Portfolio of Anandu Pillai, a passionate full-stack developer specializing in modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} noise`}>
        {children}
      </body>
    </html>
  )
}