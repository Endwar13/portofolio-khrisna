/* ============================================================
   Navbar — fixed top navigation bar
   Features: blur backdrop, brand logo, nav links, CTA button,
   and a mobile hamburger menu overlay.
   ============================================================ */
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Navigation link definitions — single source of truth
const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a subtle shadow when the user scrolls past the top
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMobileOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-[hsl(0_0%_13%)]',
        'bg-[hsl(0_0%_4%/0.92)] backdrop-blur-[12px]',
        // Transition shadow in on scroll
        scrolled && 'shadow-[0_1px_24px_hsl(0_0%_0%/0.4)]',
        'transition-shadow duration-300',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-16">

        {/* ── Brand ──────────────────────────────────────── */}
        <a href="#" className="flex flex-col leading-none group" aria-label="Go to top">
          <span className="font-sora text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
            Khrisna Tirta Endira
          </span>
          {/* Monospace role tag in green */}
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase mt-0.5">
            Front-End Dev
          </span>
        </a>

        {/* ── Desktop Nav Links ───────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-sora text-sm text-muted hover:text-foreground transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ─────────────────────────────────── */}
        <div className="hidden md:block">
          <Button as="a" href="#contact" variant="filled">
            Hire me →
          </Button>
        </div>

        {/* ── Mobile Hamburger Toggle ─────────────────────── */}
        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile Overlay Menu ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-[hsl(0_0%_13%)] px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    className="font-sora text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              {/* CTA inside mobile menu */}
              <li className="pt-2">
                <Button as="a" href="#contact" variant="filled" onClick={handleLinkClick}>
                  Hire me →
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
