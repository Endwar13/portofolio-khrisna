/* ============================================================
   Button — two variants used in CTAs across the portfolio
   - "filled"  : solid green background (primary action)
   - "ghost"   : transparent with green border (secondary action)
   ============================================================ */
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'filled' | 'ghost' | 'text'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

export function Button({
  variant = 'filled',
  children,
  className,
  as: Tag = 'button',
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  // Shared base styles for all variants
  const base =
    'inline-flex items-center gap-2 rounded-md font-sora font-semibold text-xs tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

  const variants: Record<ButtonVariant, string> = {
    // Solid green — primary CTA
    filled:
      'bg-primary text-background px-5 py-2.5 hover:bg-primary-dark',
    // Ghost — secondary CTA with green border
    ghost:
      'border border-[hsl(0_0%_13%)] text-foreground px-5 py-2.5 hover:border-primary hover:text-primary',
    // Text-only link style
    text:
      'text-primary hover:text-primary-dark px-0 py-0 underline-offset-4 hover:underline',
  }

  if (Tag === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
