import react from '@astrojs/react'
import vercelServerless from '@astrojs/vercel/serverless'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
const config: unknown = defineConfig({
  adapter: vercelServerless({}),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})

export default config
