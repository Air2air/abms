import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  base: '/abms/',
  server: { port: 3000 },
  preview: { port: 8080 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion', '@steveeeie/react-page-transition'],
          carousel: ['react-responsive-carousel'],
          maps: ['google-map-react'],
          bootstrap: ['react-bootstrap', 'bootstrap'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});