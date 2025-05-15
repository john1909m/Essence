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
  base: "/",
  plugins: [react()],
  
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'],
    force: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Remove the additionalData imports as they're causing issues
      }
    }
  },
  build: {
    rollupOptions: {
      // Don't mark CSS as external - this causes the module resolution error
      external: []
    }
  }
});