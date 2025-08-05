import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    target: 'es2020',
    outDir: 'dist',
    chunkSizeWarningLimit: 750
  }
})
