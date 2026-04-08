'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const rawX = useMotionValue(-300)
  const rawY = useMotionValue(-300)

  // Frame: fast spring — visible lag but responsive
  const frameX = useSpring(rawX, { stiffness: 520, damping: 30, mass: 0.25 })
  const frameY = useSpring(rawY, { stiffness: 520, damping: 30, mass: 0.25 })

  // Glow: slow drift, purely ambient
  const glowX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 1.2 })
  const glowY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 1.2 })

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)
    }

    // Event delegation — no MutationObserver needed
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      setHovering(!!el.closest('a, button, [role="button"], input, label'))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [rawX, rawY])

  return (
    <>
      {/* Slow ambient glow — follows lazily */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[58] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          width: 380,
          height: 380,
          background: hovering
            ? 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease, background 0.4s ease',
        }}
      />

      {/*
        Outer frame — the main design element.
        Square at rest → rotates 45° into a diamond on interactive elements.
        This is the "innovative" part: a geometric cursor that morphs.
      */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[60]"
        style={{
          x: frameX,
          y: frameY,
          translateX: '-50%',
          translateY: '-50%',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderRadius: '3px',
        }}
        animate={{
          width: clicking ? 18 : hovering ? 38 : 28,
          height: clicking ? 18 : hovering ? 38 : 28,
          rotate: hovering ? 45 : 0,
          borderColor: hovering
            ? 'rgba(167, 139, 250, 0.9)'
            : clicking
            ? 'rgba(96, 165, 250, 1)'
            : 'rgba(96, 165, 250, 0.75)',
          boxShadow: hovering
            ? '0 0 18px rgba(167,139,250,0.45), inset 0 0 10px rgba(167,139,250,0.12)'
            : '0 0 12px rgba(96,165,250,0.35)',
          opacity: visible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.18, ease: 'easeOut' },
          height: { duration: 0.18, ease: 'easeOut' },
          rotate: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
          borderColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
          opacity: { duration: 0.25 },
        }}
      />

      {/*
        Center dot — uses raw motion values directly, so it's instantaneous.
        Disappears when hovering (the rotated frame takes over as the visual anchor).
      */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[61] rounded-full"
        style={{
          x: rawX,
          y: rawY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'rgba(147, 197, 253, 0.95)',
          boxShadow: '0 0 8px rgba(147, 197, 253, 0.7)',
        }}
        animate={{
          width: clicking ? 3 : 5,
          height: clicking ? 3 : 5,
          opacity: visible ? (hovering ? 0 : 1) : 0,
        }}
        transition={{
          width: { duration: 0.1 },
          height: { duration: 0.1 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  )
}
