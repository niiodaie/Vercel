import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Make sure this points to correct root (optional if default)
  build: {
    outDir: 'dist',
  }
});
