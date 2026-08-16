'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Scroll-reveal wrapper — fades and slides children in the first time they
 * enter the viewport. `delay` staggers siblings (grids, card stacks).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}): React.JSX.Element {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
