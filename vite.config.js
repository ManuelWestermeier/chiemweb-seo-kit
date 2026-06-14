// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        chiemgau: resolve(__dirname, "artikel/chiemgau-webdesign.html"),
        seoTS: resolve(__dirname, "artikel/seo-traunstein.html"),
        lokalSeo: resolve(__dirname, "artikel/lokales-seo.html"),
        faq: resolve(__dirname, "artikel/faq.html"),
        kosten: resolve(__dirname, "artikel/website-kosten.html"),
      },
    },
  },
});