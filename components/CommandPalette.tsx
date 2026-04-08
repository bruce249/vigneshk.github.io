'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

// ─── Command registry ─────────────────────────────────────────────────────────

const COMMANDS = [
  {
    id: 'home',
    label: 'Go to Home',
    sub: '/',
    href: '/',
    icon: '⌂',
    external: false,
  },
  {
    id: 'social',
    label: 'Go to Social',
    sub: '/social',
    href: '/social',
    icon: '◈',
    external: false,
  },
  {
    id: 'about',
    label: 'Go to About',
    sub: '/about',
    href: '/about',
    icon: '◉',
    external: false,
  },
  {
    id: 'achievements',
    label: 'Go to Achievements',
    sub: '/achievements',
    href: '/achievements',
    icon: '◆',
    external: false,
  },
  {
    id: 'projects',
    label: 'Go to Projects',
    sub: '/projects',
    href: '/projects',
    icon: '◇',
    external: false,
  },
  {
    id: 'github',
    label: 'Open GitHub',
    sub: 'github.com',
    href: 'https://github.com',
    icon: '⌥',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    sub: 'linkedin.com',
    href: 'https://linkedin.com',
    icon: '⊕',
    external: true,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.sub.toLowerCase().includes(query.toLowerCase()),
  )

  const execute = useCallback(
    (cmd: (typeof COMMANDS)[0]) => {
      if (cmd.external) {
        window.open(cmd.href, '_blank', 'noopener,noreferrer')
      } else {
        router.push(cmd.href)
      }
      setOpen(false)
      setQuery('')
      setSelected(0)
    },
    [router],
  )

  // Global keyboard handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Open / toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }

      if (!open) return

      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
        setSelected(0)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((v) => (v + 1) % filtered.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((v) => (v - 1 + filtered.length) % filtered.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered[selected]) execute(filtered[selected])
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, selected, execute])

  // Focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  // Reset selected when query changes
  useEffect(() => setSelected(0), [query])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm"
            onClick={() => {
              setOpen(false)
              setQuery('')
            }}
          />

          {/* Palette modal */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[18%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg px-4"
          >
            <div
              className="rounded-2xl overflow-hidden border border-blue-500/20"
              style={{
                background: 'rgba(2, 8, 24, 0.95)',
                backdropFilter: 'blur(40px)',
                boxShadow:
                  '0 0 0 1px rgba(59,130,246,0.08), 0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(59,130,246,0.08)',
              }}
            >
              {/* Search row */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4 text-blue-400/50 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                  />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search…"
                  className="flex-1 bg-transparent font-mono text-sm text-white/85 placeholder-white/20 outline-none"
                />
                <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.04] font-mono text-[10px] text-white/25 shrink-0">
                  esc
                </kbd>
              </div>

              {/* Results */}
              <div className="py-1.5 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="px-4 py-8 text-center font-mono text-xs text-white/25">
                    No results for &quot;{query}&quot;
                  </p>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => execute(cmd)}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 ${
                        selected === i ? 'bg-blue-500/[0.10]' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className="w-5 text-center font-mono text-blue-400/50 text-sm shrink-0">
                        {cmd.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="block text-white/75 text-sm font-medium truncate">
                          {cmd.label}
                        </span>
                        <span className="block font-mono text-[10px] text-white/25 truncate">
                          {cmd.sub}
                          {cmd.external && (
                            <span className="ml-1.5 text-blue-400/30">↗</span>
                          )}
                        </span>
                      </div>
                      {selected === i && (
                        <kbd className="px-1.5 py-0.5 rounded border border-blue-500/25 bg-blue-500/[0.08] font-mono text-[10px] text-blue-400/50 shrink-0">
                          ↵
                        </kbd>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-white/[0.05] flex items-center gap-4">
                <span className="font-mono text-[10px] text-white/18 tracking-wider">
                  COMMAND PALETTE
                </span>
                <div className="ml-auto flex items-center gap-3 text-white/18 font-mono text-[10px]">
                  <span>↑↓ navigate</span>
                  <span>↵ open</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
