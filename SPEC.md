# Prompt Situs Web Portofolio Pengembang
# websiteprompts.ai

Bangun situs web portofolio pribadi untuk **Khrisna Tirta Endira** — seorang pengembang Frontend yang membangun aplikasi web modern yang cepat. Dengan dasar warna mendekati hitam, aksen hijau kode, dan dominasi font JetBrains Mono yang kuat. Nuansa gelap, teknis, presisi — suasana mirip portofolio desainer tetapi dengan estetika codebase: energi terminal, label monospasi, momen sorotan sintaks.

## Tumpukan Teknologi
React + Vite + JavaScript + Tailwind CSS + Framer Motion (motion/react) + shadcn/ui + lucide-react

## Sistem Desain
```css
:root {
  --background: 0 0% 4%;            /* #0a0a0a mendekati hitam */
  --surface: 0 0% 7%;               /* #121212 permukaan */
  --surface-raised: 0 0% 10%;       /* #1a1a1a terangkat */
  --border: 0 0% 13%;               /* #212121 batas */
  --foreground: 0 0% 95%;           /* #f2f2f2 putih pudar */
  --muted: 0 0% 42%;                /* #6b6b6b diredam */
  --primary: 142 72% 50%;           /* #22d472 hijau kode */
  --primary-dark: 142 76% 38%;      /* #18a355 hover */
  --primary-glow: 142 72% 50% / 0.12;
  --mono: 'JetBrains Mono', monospace;
}
```

## Tipografi
Impor: `https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap`
- Tampilan / H1–H2: Sora 700–800, spasi huruf -0.04em
- Tubuh / UI: Sora 300–500
- Kode / Label / Semua teknis: JetBrains Mono 400–500

## Efek Visual

**Aksen hero blok kode terminal** — kartu gelap mengambang di belakang/samping H1, ditata sebagai potongan kode:
```
background: hsl(var(--surface)); border: 1px solid hsl(var(--border));
border-radius: 8px; padding: 20px 24px; font-family: var(--mono); font-size: 13px;
```
Konten (disorot sintaks dengan span):
```jsx
<span style={{color:
'#6b6b6b'}}>// membangun masa depan</span>
<br/><span style={{color:
'#22d472'}}>const</span> <span style={{color:
'#f2f2f2'}}>alex</span> = {'{'}
<br/>  role: <span style={{color:
'#22d472'}}>"Pengembang Full-Stack"</span>,
<br/>  stack: [<span style={{color:
'#22d472'}}>"React"</span>, <span style={{color:
'#22d472'}}>"Node"</span>, <span style={{color:
'#22d472'}}>"TS"</span>],
<br/>  open: <span style={{color:
'#22d472'}}>true</span>
<br/>{'}'}
```
Animasi: float `y: [0, -8, 0]`, durasi 4s, infinite ease-in-out.

**Hover kartu bersinar** — semua kartu: `transition: border-color 0.18s, box-shadow 0.18s`. Hover: `border-color: hsl(var(--primary))`, `box-shadow: 0 0 32px hsl(142 72% 50% / 0.12)`.

**Kursor mengetik** — setelah hero H1, kursor hijau berkedip: `<span>|</span>` dengan CSS `animation: blink 1s step-end infinite; @keyframes blink { 50% { opacity: 0; } }`.

**Stagger fade-up** — `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`, 0.5s, IntersectionObserver per bagian.

## Bagian

**1. Navbar** — tetap, `background: hsl(var(--background) / 0.92)`, blur 12px, border-bottom. Kiri: "Khrisna Tirta Endira" Sora 700 16px putih + JetBrains Mono 10px tag hijau "Pengembang Full-Stack". Tengah: Proyek · Tumpukan · Tentang · Kontak. Kanan: "Hire me →" tombol hijau terisi, border-radius 6px, Sora 600 12px.

**2. Hero** — viewport penuh, dua kolom, `align-items: center`, padding 100px 64px. Kiri: JetBrains Mono 11px lencana hijau "TERSEDIA UNTUK DISEWA · 2026" dengan kursor berkedip. H1 Sora 800, clamp(52px, 6.5vw, 88px), tinggi baris 0.92, putih:
```
Membangun aplikasi
yang benar-benar digunakan orang.
```
Sub: Sora 300 16px diredam, lebar maksimal 400px: "Pengembang full-stack yang mengkhususkan diri dalam React, Node.js, dan JavaScript. Cepat, mudah diakses, dan dibangun untuk skala."
CTA: "Lihat proyek →" (hijau terisi) + "Unduh CV" (border ghost). Di bawah CTA: pil tag teknologi di JetBrains Mono 10px — React · Node.js · JavaScript · PostgreSQL · AWS — latar belakang permukaan gelap, teks hijau.
Kanan: blok kode terminal mengambang (Efek Visual di atas) dengan cahaya hijau halus `filter: drop-shadow(0 0 40px hsl(142 72% 50% / 0.15))`.

**3. Proyek Unggulan** — padding 100px 64px. H2 Sora 800: "Proyek." 3 kartu proyek besar bertumpuk (lebar penuh masing-masing). Setiap kartu `background: hsl(var(--surface))`, border, border-radius 12px, padding 32px, baris flex (info kiri + maket/tangkapan layar kanan). Kiri: JetBrains Mono 10px tag hijau (mis. "REACT · NODE · POSTGRES") + Sora 700 22px nama proyek + deskripsi 2 baris + baris chip teknologi + "Lihat proyek →" tautan hijau. Kanan: tangkapan layar proyek:
```
{/* Gambar: UI aplikasi web bersih dengan latar belakang gelap, desain dasbor modern, warna aksen hijau, minimal dan presisi */}
```
Bersinar saat dihover. 3 proyek: dasbor analitik SaaS · platform E-commerce · alat kolaborasi real-time.

**4. Tumpukan Teknologi** — latar belakang permukaan, padding 96px 64px. H2 "Tumpukan." JetBrains Mono 10px label hijau untuk setiap kategori. Dua baris: Frontend (React · Daisy UI · JavaScript · Tailwind · Framer Motion) / Backend (Node.js · PostgreSQL · Supabase · Firebase · Google Cloud). Setiap item teknologi: kartu permukaan kecil dengan placeholder ikon + nama di JetBrains Mono 11px. Hover bersinar. Header kategori di JetBrains Mono 9px huruf besar diredam.

**5. Tentang** — dua kolom, padding 96px 64px. Kiri: H2 "Tentang saya." 3 paragraf (latar belakang, pendekatan, apa yang saya bangun). Chip statistik: 5 tahun pengalaman · 30+ proyek · Kontributor sumber terbuka · Ramah jarak jauh.
Kanan: foto potret:
```
{/* Gambar: pengembang pria muda di pengaturan meja minimal gelap, terminal di layar, kode hijau di monitor, potret profesional fokus, pencahayaan gelap ambien */}
```

**6. Sumber Terbuka / GitHub** — strip terpusat, padding 60px 64px, latar belakang permukaan. H2 "Sumber terbuka." Baris statistik GitHub (3 kartu permukaan): Bintang diperoleh · Repositori publik · Kontribusi tahun ini — angka di Sora 800 hijau, label di JetBrains Mono 10px diredam. Di bawah: 3 kartu repo dengan nama, titik bahasa, jumlah bintang, deskripsi singkat.

**7. Testimoni** — padding 96px 64px. H2 "Dari klien & tim." 3 kartu. Masing-masing: border atas hijau 2px + kutipan Sora 300 14px miring + nama Sora 600 + peran JetBrains Mono 10px diredam. Stagger entrance.

**8. CTA Kontak** — latar belakang gelap, padding 80px 64px, terpusat. Cahaya hijau radial di belakang teks (opacity 0.06). H2 Sora 900 putih: "Mari membangun sesuatu." JetBrains Mono 11px hijau: "Saat ini tersedia · 2–3 slot proyek terbuka." Dua CTA: "Mulai percakapan →" (hijau terisi) + "Atau kirim email kepada saya" (tautan teks). Catatan waktu respons diredam.

**9. Footer** — `hsl(0 0% 3%)`, padding 40px 64px 24px. Kiri: "Alex Chen" + peran JetBrains Mono 10px diredam. Kanan: GitHub · LinkedIn · Twitter — tautan ikon diredam → hover hijau. Bawah: hak cipta JetBrains Mono 10px diredam.

## Responsif
Seluler: overlay hamburger navigasi · hero satu kolom, blok kode di bawah dengan lebar 85% · proyek bertumpuk penuh · tata letak tumpukan 3 kolom · tentang satu kolom.

## Ringkasan Animasi
| Elemen | Animasi | Pemicu |
|---|---|---|
| Hero H1 | Fade-up | Saat dimuat |
| Kursor mengetik | Loop berkedip | Selalu |
| Blok kode | Float y 0→-8→0, 4s | Selalu |
| Kartu proyek | Stagger fade-up | Gulir |
| Item tumpukan | Stagger fade-in | Gulir |
| CTA | Fade-up + glow | Gulir |

## Dependensi Utama
```json
{ "motion": "^12.x", "lucide-react": "^0.400.x" }
```

> **Catatan singkat:** Aksen hijau ditukar melalui `--primary`. Bagian statistik GitHub adalah UI statis — sambungkan ke GitHub API setelah pembuatan. "Alex Chen" dan semua nama proyek adalah placeholder. Bagian tumpukan teknologi harus mencerminkan keterampilan nyata. 