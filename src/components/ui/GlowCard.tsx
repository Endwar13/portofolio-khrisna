/* ============================================================
   GlowCard — reusable card with green glow on hover
   All project / stack / testimonial cards extend this base.
   ============================================================ */
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  /** Additional inline styles (e.g. stagger delay via style prop) */
  style?: React.CSSProperties
}

export function GlowCard({ children, className, style }: GlowCardProps) {
  return (
    <div
      style={style}
      className={cn(
        // Base card styles
        'rounded-xl border bg-surface p-8',
        'border-[hsl(0_0%_13%)]',
        // Hover glow effect (defined in index.css as .glow-card)
        'glow-card',
        className,
      )}
    >
      {children}
    </div>
  )
}
