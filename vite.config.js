// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['react-slick'],
//   },
//   build: {
//     rollupOptions: {
//       external: ['react-slick'],
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:"/",
  plugins: [react()],
  
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'],
    force: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['slick-carousel/slick/slick.css']
    }
  }
});