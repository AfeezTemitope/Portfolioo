import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    target: 'es2020',
    outDir: 'dist',
    chunkSizeWarningLimit: 750,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react', 'react-icons'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
