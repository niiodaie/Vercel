 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // project root
  build: {
    outDir: 'dist', // default, fine for Vercel
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})
