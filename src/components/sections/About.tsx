/* ============================================================
   About — Two-column section (Section 5)
   Left: bio text + stat chips
   Right: developer portrait placeholder
   ============================================================ */
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

// ── Stat chips data ───────────────────────────────────────────
const STATS = [
  { label: 'Modern Stack' },
  { label: '10+ projects' },
  { label: 'AI Integration' },
  { label: 'Remote-friendly' },
] as const

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

        {/* ── LEFT: Bio text ───────────────────────────── */}
        <div className="flex flex-col gap-8">
          <motion.h2
            className="font-sora font-extrabold text-foreground tracking-tight"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About me.
          </motion.h2>

          {/* Bio paragraphs */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Background */}
            <p className="font-sora font-light text-sm text-muted leading-relaxed">
              I am a dedicated Frontend Developer passionate about crafting intuitive, 
              responsive, and dynamic web interfaces. Driven by a strong curiosity for technology and programming logic, 
              I specialize in building web applications that not only look visually compelling but also deliver smooth, 
              efficient user experiences.
            </p>

            {/* Approach */}
            <p className="font-sora font-light text-sm text-muted leading-relaxed">
              Beyond frontend development, my background includes hands-on experience with hardware prototyping and 
              the Internet of Things (IoT). Bridging the gap between hardware mechanics and modern web technologies gives me
              a broader perspective when approaching technical problems creatively and systematically.
            </p>

            {/* What I build */}
            <p className="font-sora font-light text-sm text-muted leading-relaxed">
              I firmly believe that continuous learning is essential in the fast-evolving tech landscape. 
              I stay actively engaged with developer communities, keep up with the latest web tools and frameworks, 
              and am always eager to collaborate on exciting, impactful projects.
            </p>
          </motion.div>

          {/* Stat chips row */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {STATS.map(({ label }) => (
              <span
                key={label}
                className="font-mono text-[10px] uppercase tracking-wider text-primary bg-[hsl(142_72%_50%/0.08)] border border-[hsl(142_72%_50%/0.2)] rounded px-3 py-1.5"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Portrait placeholder ──────────────── */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Portrait card — placeholder with ambient dark styling */}
          <div
            className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl border border-[hsl(0_0%_13%)] overflow-hidden"
            aria-label="Developer portrait placeholder"
            role="img"
          >

            <img
              src="/profil-khrisna.jpg" // Assuming profile.jpg is in the public folder
              alt="Developer Portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
