import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space)', 'monospace'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
      colors: {
        bg: '#0A0A0F',
        surface: '#111118',
        border: '#1E1E2E',
        accent: '#7C3AED',
        'accent-light': '#A78BFA',
        amber: '#F59E0B',
        teal: '#14B8A6',
        muted: '#6B6B7E',
        light: '#E2E2F0',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        blink: 'blink 1s step-end infinite',
        'slide-right': 'slideRight 0.5s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideRight: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config