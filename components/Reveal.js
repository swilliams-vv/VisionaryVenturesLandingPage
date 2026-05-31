'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Wraps content with a subtle fade + slide-up animation on scroll.
 * Respects the user's reduced-motion preference.
 *
 * Props:
 *  - y: vertical offset to animate from (px), default 28
 *  - delay: seconds before the animation starts, default 0
 *  - duration: seconds, default 0.9
 *  - as: element type ('div' | 'section' | 'article' | 'ul' | 'li' | 'span')
 *  - trigger: 'in-view' (default, plays once on scroll-in) | 'mount' (plays immediately)
 */
export default function Reveal({
  children,
  y = 28,
  delay = 0,
  duration = 0.9,
  as = 'div',
  className,
  trigger = 'in-view',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const transition = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1], // expo-out: starts fast, settles softly
  }

  const common = {
    initial: { opacity: 0, y },
    transition,
    className,
    ...rest,
  }

  if (trigger === 'mount') {
    return (
      <MotionTag {...common} animate={{ opacity: 1, y: 0 }}>
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      {...common}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}
