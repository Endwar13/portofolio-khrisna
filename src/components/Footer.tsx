/* ============================================================
   Footer — site footer (Section 9)
   Near-black background (#080808), brand name left,
   social icon links right, copyright bar at bottom.
   ============================================================ */
import { Github, Linkedin, Instagram } from 'lucide-react'

// ── Social link definitions ───────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    Icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: Instagram,
  },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[hsl(0_0%_13%)]"
      style={{ background: 'hsl(0 0% 3%)' }}
    >
      {/* ── Main footer row ──────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-16 pt-10 pb-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-sora font-bold text-sm text-foreground">
              Khrisna Tirta Endira
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
              Full-Stack Developer
            </span>
          </div>

          {/* Social icon links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-5" role="list">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted hover:text-primary transition-colors duration-150"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Copyright bar ────────────────────────────── */}
        <div className="mt-8 pt-6 border-t border-[hsl(0_0%_10%)]">
          <p className="font-mono text-[10px] text-muted text-center">
            © {currentYear} Khrisna Tirta Endira. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
