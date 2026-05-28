import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-anonymous-pro)', 'Courier New', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        stone: {
          nav: '#E8E4DC',
          dark: '#1A1A1A',
          mid: '#555555',
          light: '#888888',
          pale: '#F5F4F2',
          border: '#E0DDD8',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
