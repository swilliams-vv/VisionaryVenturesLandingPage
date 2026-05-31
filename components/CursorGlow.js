'use client'

import { useEffect, useRef } from 'react'

/**
 * A soft radial gold glow that follows the cursor with slight lag.
 * Place inside any relatively-positioned dark container; the glow tracks
 * the mouse over the nearest positioned parent.
 *
 * Desktop only (hides under 1024px), respects prefers-reduced-motion.
 */
export default function CursorGlow({ size = 420, opacity = 0.16 }) {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 1024) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = ref.current
    if (!el) return
    const parent = el.offsetParent
    if (!parent) return

    let targetX = -size
    let targetY = -size
    let currentX = -size
    let currentY = -size
    let raf = null

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
      el.style.opacity = String(opacity)
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }
    const tick = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      el.style.transform = `translate3d(${currentX - size / 2}px, ${currentY - size / 2}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [size, opacity])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden lg:block opacity-0 will-change-transform transition-opacity duration-300"
      style={{
        width: size,
        height: size,
        background:
          'radial-gradient(circle, rgba(220,184,102,0.5), rgba(220,184,102,0.16) 35%, transparent 70%)',
        filter: 'blur(12px)',
      }}
    />
  )
}
