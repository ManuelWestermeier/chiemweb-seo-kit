import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        chiemgau: 'artikel/chiemgau-webdesign.html',
        seo: 'artikel/seo-traunstein.html',
        kosten: 'artikel/website-kosten.html',
        lokal: 'artikel/lokales-seo.html',
        faq: 'artikel/faq.html',
      },
    },
  },
  build: { outDir: "docs" }
})
