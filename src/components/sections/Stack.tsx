/* ============================================================
   Stack — Tech Stack section (Section 4)
   Displays frontend and backend technologies in labelled rows.
   Surface background, glow hover on each item card.
   ============================================================ */
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { MonoLabel } from '@/components/ui/MonoLabel'

// ── Tech stack data ───────────────────────────────────────────
interface TechItem {
  name: string
  /** Unicode emoji used as a lightweight icon placeholder */
  icon: string
}

interface TechCategory {
  label: string
  items: TechItem[]
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Daisy UI', icon: '▲' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Tailwind', icon: '🌊' },
      { name: 'Framer Motion', icon: '◎' },
    ],
  },
  {
    label: 'Database Tools',
    items: [
      { name: 'Node.js', icon: '⬡' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Firebase', icon: '◈' },
      { name: 'Google_Cloud', icon: '☁️' },
    ],
  },
]

export function Stack() {
  return (
    <SectionWrapper id="stack" surfaceBg>

      {/* ── Section heading ──────────────────────────── */}
      <motion.h2
        className="font-sora font-extrabold text-foreground tracking-tight mb-12"
        style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The stack.
      </motion.h2>

      {/* ── Tech categories ──────────────────────────── */}
      <div className="flex flex-col gap-10">
        {TECH_CATEGORIES.map((category, catIndex) => (
          <div key={category.label}>

            {/* Category header in muted monospace uppercase */}
            <motion.p
              className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              {category.label}
            </motion.p>

            {/* Tech item grid — responsive 3-col on mobile, 5-col on desktop */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {category.items.map((tech, itemIndex) => (
                <TechItem
                  key={tech.name}
                  tech={tech}
                  delay={catIndex * 0.1 + itemIndex * 0.06}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

/* ──────────────────────────────────────────────────────────
   TechItem — individual technology card
   ────────────────────────────────────────────────────────── */
interface TechItemProps {
  tech: TechItem
  delay: number
}

function TechItem({ tech, delay }: TechItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 rounded-lg border border-[hsl(0_0%_13%)] bg-surface-raised p-4 glow-card cursor-default"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Icon placeholder */}
      <span
        className="text-xl leading-none select-none"
        aria-hidden="true"
      >
        {tech.icon}
      </span>

      {/* Tech name in JetBrains Mono */}
      <MonoLabel className="text-muted group-hover:text-primary">
        {tech.name}
      </MonoLabel>
    </motion.div>
  )
}
