export const colors = {
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
} as const

export const shadows = {
  'lift-1': '3px 3px 0px #1A1209',
  'lift-2': '5px 5px 0px #1A1209',
  'lift-3': '8px 8px 0px #1A1209',
  'lift-4': '12px 12px 0px #1A1209',
  accent: '4px 4px 0px #F2C94C',
  soft: '4px 4px 0px rgba(26,18,9,0.15)',
} as const

export const fonts = {
  splash: 'var(--font-splash)',
  italiana: 'var(--font-italiana)',
  'istok-web': 'var(--font-istok-web)',
  inter: 'var(--font-inter)',
  'major-mono-display': 'var(--font-major-mono-display)',
  'saira-extra-condensed': 'var(--font-saira-extra-condensed)',
  'bricolage-grotesque': 'var(--font-bricolage-grotesque)',
  'comic-neue': 'var(--font-comic-neue)',
} as const

export const motion = {
  duration: {
    fast: '150ms',
    base: '220ms',
    slow: '320ms',
  },
  easing: {
    paper: 'cubic-bezier(0.2, 0.9, 0.25, 1)',
    bounce: 'cubic-bezier(0.22, 1.15, 0.3, 1)',
  },
} as const

export type AccentColor = keyof typeof colors.accent
export type ShadowLevel = keyof typeof shadows
