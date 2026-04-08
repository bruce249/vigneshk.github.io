import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

import AnimatedBackground from '@/components/AnimatedBackground'
import CommandPalette from '@/components/CommandPalette'
import CursorGlow from '@/components/CursorGlow'
import LoadingScreen from '@/components/LoadingScreen'
import NavBar from '@/components/NavBar'
import StatusIndicator from '@/components/StatusIndicator'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heisenberg — AI · Quant · Systems',
  description:
    'Personal interface of Heisenberg 001 — building at the intersection of AI, blockchain, and entrepreneurship. IIT Delhi.',
  keywords: ['AI', 'Quantitative Finance', 'Systems', 'IIT Delhi', 'Machine Learning'],
  authors: [{ name: 'Heisenberg 001' }],
  openGraph: {
    title: 'Heisenberg 001',
    description: 'AI · Quant · Systems',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Heisenberg 001',
    description: 'AI · Quant · Systems',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#000010] text-white antialiased">
        {/* Loading screen — first thing rendered, covers everything */}
        <LoadingScreen />

        {/* Custom cursor overlay */}
        <CursorGlow />

        {/* Command palette — triggered by Ctrl/Cmd+K */}
        <CommandPalette />

        {/* Animated particle/grid background — fixed, z-0 */}
        <AnimatedBackground />

        {/* Navigation — fixed top bar */}
        <NavBar />

        {/* Page content */}
        <main className="relative z-10">{children}</main>

        {/* System status indicator — fixed bottom-left */}
        <StatusIndicator />
      </body>
    </html>
  )
}
