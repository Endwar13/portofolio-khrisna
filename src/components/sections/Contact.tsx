/* ============================================================
   Contact — CTA section (Section 8)
   Dark background, radial green glow, centered headline,
   and two CTA buttons.
   ============================================================ */
import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'

export function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">

      {/* ── Radial green glow backdrop (6% opacity per spec) ─ */}
      <div
        className="pointer-events-none absolute inset-0 bg-glow-radial"
        aria-hidden="true"
      />

      {/* ── Centered content ─────────────────────────── */}
      <div className="relative flex flex-col items-center text-center gap-8 py-4">

        {/* Availability label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[11px] tracking-widest uppercase text-primary">
            Currently available · 2–3 project slots open
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="font-sora font-black text-foreground tracking-tight"
          style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: '1' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's build something.
        </motion.h2>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Primary CTA */}
          <Button
            as="a"
            href="mailto:alex@example.com"
            variant="filled"
            className="text-sm px-6 py-3"
          >
            Start a conversation →
          </Button>

          {/* Text email link */}
          <Button
            as="a"
            href="mailto:alex@example.com"
            variant="text"
            className="text-sm flex items-center gap-2"
          >
            <Mail size={14} aria-hidden="true" />
            Or email me
          </Button>
        </motion.div>

        {/* Response time note */}
        <motion.p
          className="font-sora font-light text-xs text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Typical response time: 24–48 hours
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
