/* ============================================================
   Projects — Featured Projects section (Section 3)
   Three full-width cards with stagger scroll animation.
   Each card: tag + title + description + tech chips + CTA.
   ============================================================ */
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { MonoLabel } from '@/components/ui/MonoLabel'

// ── Project data (placeholder — replace with real projects) ──
interface Project {
  tag: string
  name: string
  description: string
  stack: string[]
  href: string
  image: string | null
}

const PROJECTS: Project[] = [
  {
    tag: 'JavaScript · Tailwind · Firebase',
    name: 'New Student Registration Website',
    description:
      'A simple website for New Student application and registration, with firebase integration and converting data form store to spreadsheet.',
    stack: ['Javascript', 'Node.js', 'Tailwind CSS', 'Firestore'],
    href: 'https://ppdb-percik.pages.dev/',
    image: '/PPDB_WEB.png',
  },
  {
    tag: 'REACT · SUPABASE · GEMINI',
    name: 'AI Management System',
    description:
      'Management APP integrated with AI and cloud database, and AI response based on database',
    stack: ['React', 'JavaScript', 'Supabase', 'GeminiAPI', 'Tailwind'],
    href: 'https://nexus-eco-khrisna.ai.studio',
    image: '/EMS.png',
  },
  {
    tag: 'REACT · Tailwind · JavaScript',
    name: 'School Landing Page',
    description:'A modern landing page for a school, showcasing its programs and facilities.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    href: 'https://landing-page-cikini-v2.khrisnatirtaendira.workers.dev/',
    image: '/SCHOOL_LANDING.png',
  },
]

export function Projects() {
  return (
    <SectionWrapper id="projects">

      {/* ── Section heading ──────────────────────────── */}
      <motion.h2
        className="font-sora font-extrabold text-foreground tracking-tight mb-12"
        style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Software Projects.
      </motion.h2>

      {/* ── Project cards stack ──────────────────────── */}
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

/* ──────────────────────────────────────────────────────────
   ProjectCard — individual project entry
   Stagger delay: each card is delayed by index * 0.1s
   ────────────────────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex flex-col lg:flex-row gap-8 rounded-xl border border-[hsl(0_0%_13%)] bg-surface p-8 glow-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >

      {/* ── Left: Project info ──────────────────────── */}
      <div className="flex flex-1 flex-col gap-4 justify-center">
        {/* Technology tag */}
        <MonoLabel>{project.tag}</MonoLabel>

        {/* Project name */}
        <h3 className="font-sora font-bold text-foreground text-xl leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p className="font-sora font-light text-sm text-muted leading-relaxed max-w-lg">
          {project.description}
        </p>

        {/* Tech chip row */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-muted border border-[hsl(0_0%_13%)] rounded px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View project link */}
        <a
          href={project.href}
          className="inline-flex items-center gap-1.5 font-sora font-semibold text-xs text-primary hover:text-primary-dark transition-colors mt-2 w-fit"
          aria-label={`View ${project.name} project`}
        >
          View project
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* ── Right: Project screenshot or placeholder ──── */}
      <div
        className="flex-shrink-0 w-full lg:w-64 xl:w-80 h-48 lg:h-auto rounded-lg border border-[hsl(0_0%_13%)] overflow-hidden"
        aria-label={`${project.name} screenshot`}
        role="img"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full p-4 flex flex-col gap-3 opacity-40 bg-gradient-to-br from-[hsl(142_72%_50%/0.08)] via-[hsl(0_0%_10%)] to-[hsl(220_72%_50%/0.06)]">
            {/* Placeholder grid — mimics a dashboard/UI wireframe */}
            {/* Fake nav bar */}
            <div className="flex gap-2 items-center">
              <div className="w-16 h-2 rounded bg-primary/30" />
              <div className="w-8 h-2 rounded bg-muted/30" />
              <div className="w-8 h-2 rounded bg-muted/30" />
            </div>
            {/* Fake stat cards */}
            <div className="grid grid-cols-3 gap-2 flex-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded bg-[hsl(0_0%_13%)] flex flex-col gap-2 p-2">
                  <div className="w-full h-1.5 rounded bg-primary/20" />
                  <div className="w-2/3 h-1.5 rounded bg-muted/20" />
                </div>
              ))}
            </div>
            {/* Fake chart area */}
            <div className="flex-1 rounded bg-[hsl(0_0%_13%)] flex items-end gap-1 p-2">
              {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-primary/30"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  )
}
