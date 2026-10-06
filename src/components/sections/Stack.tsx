/* ============================================================
   Stack — Tech Stack section (Section 4)
   Menampilkan frontend dan backend dalam grid dengan icon SVG.
   ============================================================ */
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { MonoLabel } from '@/components/ui/MonoLabel'
import {
  React as ReactIcon,
  Javascript,
  TailwindCss,
  Nodedotjs,
  Postgresql,
  Firebase,
  GoogleCloud,
  Supabase,
  Daisyui,
  Gemini,
} from '@thesvg/react'

/* ─────────────────────────────────────────────────────────────
   MASALAH 1 — Tipe `icon` sebelumnya menggunakan `React.ElementType`
   yang terlalu lebar dan tidak mencerminkan prop API dari @thesvg/react.
   Komponen @thesvg/react menerima prop SVG standar seperti `width`,
   `height`, dan `variant`, bukan prop `size` atau `className` untuk
   mengubah warna melalui `fill-current`.

   MASALAH 2 — `className="text-lg fill-current"` tidak bekerja
   karena icon ini menggunakan `fill` yang sudah di-hardcode di dalam
   path SVG (bukan `currentColor`). Akibatnya, icon muncul dengan
   warna bawaan (atau tidak muncul sama sekali di dark background).

   SOLUSI — Bungkus icon dalam container `<div>` berukuran tetap,
   lalu berikan `width` dan `height` langsung ke komponen SVG-nya.
   Untuk kontrol warna di tema gelap, gunakan `filter` CSS (brightness)
   atau gunakan prop `variant="mono"` jika tersedia.
   ──────────────────────────────────────────────────────────── */

// ── Tipe icon: cast aman ke SVGProps ─────────────────────────
// MASALAH 3 — Setiap komponen @thesvg/react memiliki tipe `variant`
// yang unik per-brand (misal: `SupabaseVariant`, `FirebaseVariant`),
// sehingga tidak bisa dijadikan satu interface generik tanpa konflik.
// Solusi: gunakan `React.ComponentType<React.SVGProps<SVGSVGElement>>`
// yang kompatibel dengan SVG standar, lalu cast setiap icon dengan
// `as unknown as SvgIconComponent` agar TypeScript tidak komplain
// saat memasukkan ke array data.
type SvgIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface TechItem {
  name: string
  icon: SvgIconComponent
  /**
   * Ukuran ikon dalam pixel.
   * MASALAH 4 — Sebelumnya tidak ada kontrol ukuran per-icon,
   * sehingga beberapa icon (misalnya React yang memiliki viewBox
   * lebar 569px) tampil sangat besar, sedangkan icon lain tampil
   * terlalu kecil. Dengan properti `iconSize` kita bisa normalkan.
   */
  iconSize?: number
}

interface TechCategory {
  label: string
  items: TechItem[]
}

/* ── DEFAULT_ICON_SIZE ───────────────────────────────────────
   Ukuran default untuk semua icon: 28px.
   Cukup terlihat jelas, tidak terlalu besar atau kecil.
   ──────────────────────────────────────────────────────────── */
const DEFAULT_ICON_SIZE = 28

// ── Cast helper — setiap icon di-cast ke tipe umum SvgIconComponent ─
// Diperlukan karena setiap brand di @thesvg/react memiliki tipe `variant`
// yang berbeda-beda (SupabaseVariant, FirebaseVariant, dll) dan tidak
// kompatibel satu sama lain secara langsung.
const cast = (c: unknown) => c as SvgIconComponent

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: cast(ReactIcon) },
      // CATATAN — Daisyui ada di library (`Daisyui` bukan `DaisyUI`).
      // Sebelumnya dikomentari karena tidak ketemu, padahal nama ekspornya
      // harus diawali huruf kapital sesuai konvensi @thesvg/react.
      { name: 'Daisy UI', icon: cast(Daisyui) },
      { name: 'JavaScript', icon: cast(Javascript) },
      { name: 'Tailwind', icon: cast(TailwindCss) },
      // CATATAN — `Gemini` tersedia. Sebelumnya tidak ditemukan karena
      // dicari dengan nama yang salah (misalnya "GeminiAI").
      { name: 'Gemini AI', icon: cast(Gemini) },
    ],
  },
  {
    label: 'Database & Cloud',
    items: [
      { name: 'Node.js', icon: cast(Nodedotjs) },
      { name: 'PostgreSQL', icon: cast(Postgresql) },
      { name: 'Supabase', icon: cast(Supabase) },
      { name: 'Firebase', icon: cast(Firebase) },
      { name: 'Google Cloud', icon: cast(GoogleCloud) },
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

            {/* Label kategori dalam monospace muted uppercase */}
            <motion.p
              className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              {category.label}
            </motion.p>

            {/* Grid icon — 3 kolom di mobile, 5 di desktop */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {category.items.map((tech, itemIndex) => (
                <TechItemCard
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
   TechItemCard — kartu teknologi individual
   ──────────────────────────────────────────────────────────

   MASALAH 5 — Container icon sebelumnya menggunakan `h-12` (48px)
   tanpa membatasi lebar, sehingga SVG bisa mengisi seluruh lebar
   kartu jika `width` tidak di-set secara eksplisit. Sekarang
   container menggunakan ukuran tetap `w-[28px] h-[28px]` agar
   semua icon sejajar dan konsisten.

   MASALAH 6 — `fill-current` di className tidak bekerja pada
   icon @thesvg/react karena SVG-nya memakai fill hardcoded di
   dalam `<path>`. Solusinya: biarkan warna asli icon tampil
   (lebih informatif / on-brand) atau gunakan CSS `filter` untuk
   menyesuaikan di dark mode. Di sini kita biarkan warna asli
   karena lebih recognizable sebagai brand identity.
   ────────────────────────────────────────────────────────── */
interface TechItemCardProps {
  tech: TechItem
  delay: number
}

function TechItemCard({ tech, delay }: TechItemCardProps) {
  const IconComponent = tech.icon
  const size = tech.iconSize ?? DEFAULT_ICON_SIZE

  return (
    <motion.div
      className="flex flex-col items-center gap-2.5 rounded-lg border border-[hsl(0_0%_13%)] bg-surface-raised p-4 glow-card cursor-default"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {/* ── Icon container — ukuran tetap agar sejajar ─────
          PERBAIKAN: container fixed-size + overflow hidden
          mencegah icon tumpah keluar batas kartu.
          `flex-shrink-0` memastikan container tidak mengecil
          saat label teks lebih panjang.
          ──────────────────────────────────────────────────── */}
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <IconComponent
          // PERBAIKAN UTAMA — berikan width & height langsung ke SVG
          // agar ukuran terkontrol, bukan mengandalkan CSS font-size.
          width={size}
          height={size}
        />
      </div>

      {/* Nama teknologi dalam JetBrains Mono */}
      <MonoLabel className="text-muted text-center leading-tight">
        {tech.name}
      </MonoLabel>
    </motion.div>
  )
}
