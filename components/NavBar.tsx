'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'SOCIAL', href: '/social' },
  { label: 'ABOUT', href: '/about' },
  { label: 'ACHIEVEMENTS', href: '/achievements' },
  { label: 'PROJECTS', href: '/projects' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Blur backdrop */}
        <div className="absolute inset-0 bg-[#000010]/70 backdrop-blur-xl border-b border-white/[0.05]" />

        <div className="relative max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.3em] text-blue-400/70 hover:text-blue-300 transition-colors duration-200"
          >
            H_001
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-mono text-[10px] tracking-widest transition-colors duration-200 ${
                    active ? 'text-blue-400' : 'text-white/30 hover:text-white/65'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-blue-400/50"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Ctrl+K hint — desktop only */}
          <div className="hidden md:flex items-center gap-1 opacity-40">
            <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono text-[10px] text-white/50">
              Ctrl
            </kbd>
            <span className="text-white/25 text-[10px]">K</span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-white/50 hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-current"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-current"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-current"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#000010]/95 backdrop-blur-2xl border-b border-white/[0.06] py-4 md:hidden"
          >
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-6 py-3 font-mono text-xs tracking-widest transition-colors duration-200 ${
                      active ? 'text-blue-400 bg-blue-500/5' : 'text-white/35 hover:text-white/65'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
