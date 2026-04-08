'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StatusIndicator() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }),
      )
    }
    fmt()
    const interval = setInterval(fmt, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-5 left-5 z-40 select-none"
    >
      <div className="glass rounded-full px-3.5 py-2 flex items-center gap-2.5 border border-white/[0.06]">
        {/* Pulsing green dot */}
        <div className="relative shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
        </div>

        <span className="font-mono text-[10px] text-white/30 tracking-wider whitespace-nowrap">
          ALL SYSTEMS OPERATIONAL
        </span>

        {time && (
          <>
            <div className="w-px h-3 bg-white/10" />
            <span className="font-mono text-[10px] text-white/20 tabular-nums">{time}</span>
          </>
        )}
      </div>
    </motion.div>
  )
}
