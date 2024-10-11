import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Covid-Tracker-App/",
  css: {
    postcss: './postcss.config.js',
  },
})
