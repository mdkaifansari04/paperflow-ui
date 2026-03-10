import type { Metadata } from 'next'
import {
  DM_Serif_Display,
  Lora,
  JetBrains_Mono,
  Caveat,
} from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const lora = Lora({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const caveat = Caveat({
  variable: '--font-handwritten',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Paperflow UI',
    template: '%s · Paperflow UI',
  },
  description:
    'A copy-paste component library for Next.js with a warm editorial Paper UI aesthetic.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={[
          dmSerifDisplay.variable,
          lora.variable,
          jetbrainsMono.variable,
          caveat.variable,
          'antialiased',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  )
}
