import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: () => {
        // Default optimizations for all images
        return new URLSearchParams({
          format: 'webp;avif;jpg',
          quality: '80',
          as: 'picture',
        })
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          let extType = assetInfo.name?.split('.').at(1) ?? 'misc'
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(extType)) {
            extType = 'images'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
      },
    },
  },
})
