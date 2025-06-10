import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }],
        },
      },
    }),
    visualizer({ open: true, filename: 'dist/stats.html' }),
  ],
  base: '/', // For allbritishmotorshow.com root
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
          utilities: ['@/utilities/windowSize', '@/utilities/constants'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});