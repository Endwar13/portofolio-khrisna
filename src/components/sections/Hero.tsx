/* ============================================================
   Hero — full-viewport section (Section 2)
   Two-column layout: headline + CTAs on left,
   floating terminal code block on right.
   ============================================================ */
import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'

// Tech stack pills shown below the CTAs
const TECH_TAGS = ['React', 'JavaScript', 'Tailwind CSS', 'Daisy UI', 'Supabase'] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle radial glow behind entire hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, hsl(142 72% 50% / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-20 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── LEFT COLUMN: Text content ──────────────── */}
          <div className="flex flex-col gap-8">

            {/* Availability badge with blinking cursor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-mono text-[11px] tracking-widest uppercase text-primary">
                AVAILABLE FOR HIRE · 2026
                {/* Blinking cursor */}
                <span className="cursor-blink ml-1">|</span>
              </span>
            </motion.div>

            {/* Main H1 headline */}
            <motion.h1
              className="font-sora font-extrabold text-foreground leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(52px, 6.5vw, 88px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building Modern Software
              <br />
              and AI Technology.
            </motion.h1>

            {/* Subtitle / tagline */}
            <motion.p
              className="font-sora font-light text-base text-muted max-w-[400px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Front-End developer specialising in React, Supabase, and
              JavaScript. Familiar with AI Environment and cloud database integration.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button as="a" href="#projects" variant="filled">
                View projects →
              </Button>
              <Button as="a" href="/cv.pdf" variant="ghost" target="_blank" rel="noopener noreferrer">
                Download CV
              </Button>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest uppercase text-primary bg-surface border border-[hsl(0_0%_13%)] rounded px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Floating terminal code block ─ */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TerminalCodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   TerminalCodeBlock — syntax-highlighted floating card
   Animates with a vertical float loop (y: 0 → -8 → 0, 4s)
   ────────────────────────────────────────────────────────── */
function TerminalCodeBlock() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      // Subtle green drop-shadow behind the whole card
      style={{ filter: 'drop-shadow(0 0 40px hsl(142 72% 50% / 0.15))' }}
      className="w-full max-w-sm lg:max-w-md"
    >
      {/* Terminal window chrome */}
      <div
        className="rounded-lg border border-[hsl(0_0%_13%)] bg-surface"
        style={{ padding: '20px 24px' }}
      >
        {/* Window traffic-light dots */}
        <div className="flex gap-1.5 mb-5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Syntax-highlighted code snippet */}
        <pre
          className="font-mono text-[13px] leading-relaxed whitespace-pre overflow-x-auto "
          aria-label="Code snippet introducing Alex Chen"
        >
          {/* Comment line */}
          <span style={{ color: '#6b6b6b' }}>{'// building the future'}</span>
          {'\n'}

          {/* const keyword */}
          <span style={{ color: '#22d472' }}>const</span>
          {' '}
          <span style={{ color: '#f2f2f2' }}>khrisna</span>
          {' = {\n'}

          {'  role: '}
          <span style={{ color: '#22d472' }}>"Front-End Dev"</span>
          {',\n'}

          {'  stack: ['}
          <span style={{ color: '#22d472' }}>"React"</span>
          {', '}
          <span style={{ color: '#22d472' }}>"Supabase"</span>
          {', '}
          <span style={{ color: '#22d472' }}>"Tailwind"</span>
          {'],\n'}

          {'  open: '}
          <span style={{ color: '#22d472' }}>true</span>
          {'\n}'}
        </pre>

        {/* Blinking input cursor at the bottom */}
        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-[11px] text-primary">▶</span>
          <span className="cursor-blink font-mono text-[13px] text-primary">|</span>
        </div>
      </div>
    </motion.div>
  )
}
