/** @type {import('tailwindcss').Config} */
export default {
  // Scan all relevant source files for class usage
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ─── Custom Color Palette (mirrors CSS variables) ───────────────
      colors: {
        background: 'hsl(0 0% 4%)',
        surface: 'hsl(0 0% 7%)',
        'surface-raised': 'hsl(0 0% 10%)',
        border: 'hsl(0 0% 13%)',
        foreground: 'hsl(0 0% 95%)',
        muted: 'hsl(0 0% 42%)',
        primary: 'hsl(142 72% 50%)',
        'primary-dark': 'hsl(142 76% 38%)',
      },

      // ─── Custom Font Families ────────────────────────────────────────
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      // ─── Custom Font Sizes ───────────────────────────────────────────
      fontSize: {
        'display': ['clamp(52px, 6.5vw, 88px)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
      },

      // ─── Custom Animations ───────────────────────────────────────────
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },

      // ─── Custom Box Shadows ──────────────────────────────────────────
      boxShadow: {
        'glow': '0 0 32px hsl(142 72% 50% / 0.12)',
        'glow-lg': '0 0 60px hsl(142 72% 50% / 0.15)',
      },
    },
  },
  plugins: [],
}
