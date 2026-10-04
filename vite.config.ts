import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch: {
      usePolling: true,
      interval: 2000,
    },
  },
  resolve: {
    alias: {
      // Map @/* to src/* — avoids relative import hell
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
