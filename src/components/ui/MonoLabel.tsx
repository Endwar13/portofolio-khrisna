/* ============================================================
   MonoLabel — small JetBrains Mono tag used throughout the UI
   Examples: "AVAILABLE FOR HIRE", "REACT · NODE · POSTGRES"
   ============================================================ */
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MonoLabelProps {
  children: ReactNode
  className?: string
}

export function MonoLabel({ children, className }: MonoLabelProps) {
  return (
    <span
      className={cn(
        'label-mono', // font-mono, 10px, uppercase, green — defined in index.css
        className,
      )}
    >
      {children}
    </span>
  )
}
