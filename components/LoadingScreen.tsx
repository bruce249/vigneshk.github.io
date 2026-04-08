'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BOOT_LINES = [
  '> INITIALIZING SYSTEM...',
  '> LOADING NEURAL MODULES...',
  '> CALIBRATING INTERFACE...',
  '> ESTABLISHING SECURE CONNECTION...',
  '> ALL SYSTEMS NOMINAL.',
  '> READY.',
]

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    // Progress bar — fills in ~2s
    const DURATION = 2000
    const INTERVAL = 30
    const STEP = 100 / (DURATION / INTERVAL)
    let current = 0

    const progressTimer = setInterval(() => {
      current = Math.min(current + STEP + Math.random() * 0.5, 100)
      setProgress(current)
      if (current >= 100) clearInterval(progressTimer)
    }, INTERVAL)

    // Boot lines — staggered
    const lineTimers: ReturnType<typeof setTimeout>[] = []
    BOOT_LINES.forEach((_, i) => {
      lineTimers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, BOOT_LINES[i]])
        }, 200 + i * 330),
      )
    })

    // Hide after sequence finishes
    const hideTimer = setTimeout(() => setVisible(false), 2600)

    return () => {
      clearInterval(progressTimer)
      lineTimers.forEach(clearTimeout)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-[#000010] flex flex-col items-center justify-center select-none"
        >
          {/* Scan line effect */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]"
            aria-hidden="true"
          >
            <div
              className="w-full h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-scan-line"
            />
          </div>

          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.45em] text-blue-500/40 mb-2">
              SYSTEM
            </p>
            <p className="font-display text-2xl font-bold tracking-[0.22em] text-blue-400">
              HEISENBERG_001
            </p>
          </motion.div>

          {/* Boot log */}
          <div className="w-72 mb-8 min-h-[140px]">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`font-mono text-xs flex items-start gap-1.5 mb-1 ${
                  i === lines.length - 1 ? 'text-green-400/80' : 'text-white/25'
                }`}
              >
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-72">
            <div className="w-full h-px bg-white/[0.07] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-violet-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.03, ease: 'linear' }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/20 tracking-widest">
                LOADING
              </span>
              <span className="font-mono text-[10px] text-white/20">
                {Math.floor(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
