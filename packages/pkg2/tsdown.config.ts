import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts', './src/style.css'],
  outDir: './dist',
  dts: true,
})
