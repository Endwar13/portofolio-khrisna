/* ============================================================
   SectionWrapper — layout shell for every page section
   Handles consistent max-width, horizontal padding, and the
   scroll-triggered stagger fade-up animation via useInView.
   ============================================================ */
import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  /** Apply a surface background (slightly lighter than page bg) */
  surfaceBg?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  surfaceBg = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        surfaceBg && 'bg-surface',
        className,
      )}
    >
      {/* Constrain content width and apply section padding */}
      <motion.div
        className="mx-auto max-w-6xl px-6 py-24 lg:px-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
