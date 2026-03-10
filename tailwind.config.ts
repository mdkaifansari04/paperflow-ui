import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", 'Georgia', 'serif'],
        body: ["'Lora'", 'Georgia', 'serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
        handwritten: ["'Caveat'", 'cursive'],
      },
      colors: {
        paper: {
          base: '#F5F0E8',
          light: '#FAF8F3',
          aged: '#EDE4D0',
          cream: '#FFF9F0',
        },
        ink: {
          black: '#1A1209',
          dark: '#2C2416',
          medium: '#5C4F3A',
          light: '#9B8E7A',
          faint: '#C8BFB0',
        },
        accent: {
          yellow: '#F2C94C',
          red: '#E05A4D',
          green: '#4CAF7D',
          blue: '#4A90D9',
          orange: '#E8833A',
        },
        highlight: {
          yellow: '#F2C94C',
          red: '#E05A4D',
          green: '#4CAF7D',
          blue: '#4A90D9',
          orange: '#E8833A',
        },
      },
      boxShadow: {
        'lift-1': '3px 3px 0px #1A1209',
        'lift-2': '5px 5px 0px #1A1209',
        'lift-3': '8px 8px 0px #1A1209',
        'lift-4': '12px 12px 0px #1A1209',
        accent: '4px 4px 0px #F2C94C',
        soft: '4px 4px 0px rgba(26,18,9,0.15)',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      transitionTimingFunction: {
        paper: 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'stamp-in': {
          '0%': { transform: 'scale(0.92) rotate(-1.5deg)', opacity: '0' },
          '70%': { transform: 'scale(1.03) rotate(0.5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 260ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'stamp-in': 'stamp-in 320ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
