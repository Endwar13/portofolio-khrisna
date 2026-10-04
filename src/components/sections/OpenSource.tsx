/* ============================================================
   OpenSource — GitHub / Open Source section (Section 6)
   Centered strip with static GitHub stats and repo cards.
   Wire GitHub stats to the API post-generation.
   ============================================================ */
import { motion } from 'motion/react'
import { Star, GitFork, GitBranch } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { GlowCard } from '@/components/ui/GlowCard'
import { MonoLabel } from '@/components/ui/MonoLabel'

// ── Static GitHub stats (replace with API data) ───────────────
const GITHUB_STATS = [
  { value: '240+', label: 'Stars earned', icon: Star },
  { value: '16', label: 'Repos public', icon: GitBranch },
  { value: '65', label: 'Contributions this year', icon: GitFork },
] as const

// ── Featured repos (replace with GitHub API response) ─────────
const REPOS = [
  {
    name: 'Ecosystem Management System',
    language: 'React',
    langColor: '#36c631',
    stars: 124,
    description:
      'Management System for nature and ecosystem integrated with AI and Cloud Database',
  },
  {
    name: 'Web Monitoring RC',
    language: 'React',
    langColor: '#f7df1e',
    stars: 87,
    description:
      'RC with MQTT communication and control using ESP-32',
  },
  {
    name: 'Temperature and Humidity Logger',
    language: 'C++',
    langColor: '#3178c6',
    stars: 56,
    description:
      'Temperature and Humidity Logger using ESP-32 on Arduino Cloud and dashboard monitoring',
  },
] as const

export function OpenSource() {
  return (
    <SectionWrapper id="opensource" surfaceBg>

      {/* ── Section heading (centered) ───────────────── */}
      <div className="text-center mb-12">
        <motion.h2
          className="font-sora font-extrabold text-foreground tracking-tight"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          IoT Project.
        </motion.h2>
      </div>

      {/* ── GitHub stats row (3 cards) ───────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10">
        {GITHUB_STATS.map(({ value, label, icon: Icon }, index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center gap-2 rounded-xl border border-[hsl(0_0%_13%)] bg-surface p-6 text-center glow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Icon */}
            <Icon size={16} className="text-muted" aria-hidden="true" />

            {/* Big green number */}
            <span className="font-sora font-extrabold text-primary text-4xl leading-none">
              {value}
            </span>

            {/* Label */}
            <MonoLabel className="text-muted">{label}</MonoLabel>
          </motion.div>
        ))}
      </div>

      {/* ── Repo cards ───────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REPOS.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <GlowCard className="flex flex-col gap-3 h-full p-5">
              {/* Repo name */}
              <h3 className="font-mono text-sm font-medium text-foreground">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="font-sora font-light text-xs text-muted leading-relaxed flex-1">
                {repo.description}
              </p>

              {/* Footer: language dot + star count */}
              <div className="flex items-center gap-4 pt-1">
                {/* Language indicator */}
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] text-muted">{repo.language}</span>
                </span>

                {/* Star count */}
                <span className="flex items-center gap-1">
                  <Star size={10} className="text-muted" aria-hidden="true" />
                  <span className="font-mono text-[10px] text-muted">{repo.stars}</span>
                </span>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
