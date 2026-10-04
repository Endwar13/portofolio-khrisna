/* ============================================================
   App.tsx — Root component
   Composes all sections in order; Navbar is fixed overlay.
   ============================================================ */
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { About } from '@/components/sections/About'
import { OpenSource } from '@/components/sections/OpenSource'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed navigation bar — overlays all sections */}
      <Navbar />

      {/* ── Page sections in document order ─────────── */}
      <main>
        {/* 1. Hero — full viewport, headline + terminal block */}
        <Hero />

        {/* 2. Featured Projects — three large project cards */}
        <Projects />

        {/* 3. Tech Stack — frontend / backend technology grid */}
        <Stack />

        {/* 4. About — bio paragraphs + portrait placeholder */}
        <About />

        {/* 5. Open Source — GitHub stats + repo cards */}
        <OpenSource />


        {/* 7. Contact CTA — "Let's build something" */}
        <Contact />
      </main>

      {/* Site footer */}
      <Footer />
    </>
  )
}
