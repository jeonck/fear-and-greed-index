import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fear-and-greed-index/', // Added for GitHub Pages deployment
  css: {
    postcss: './postcss.config.js', // Explicitly tell Vite to use this PostCSS config
  },
})
