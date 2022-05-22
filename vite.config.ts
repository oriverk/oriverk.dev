import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": "src",
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'README.md', dest: "." },
        { src: 'Resume.md', dest: "." }
      ]
    })
  ],
  assetsInclude: [/\.mdx?$/]
})
