import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages supplies the repository name at build time; local and Vercel
  // deployments continue to use the site root.
  base: process.env.BASE_PATH || '/',
})
