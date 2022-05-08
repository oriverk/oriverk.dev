import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": "src",
      react: "preact/compat"
    },
  },
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        { src: 'README.md', dest: "." },
        { src: 'Resume.md', dest: "." }
      ]
    })
  ],
  assetsInclude: [/\.mdx?$/]
})
