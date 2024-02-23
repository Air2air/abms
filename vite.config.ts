import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), tsConfigPaths(), svgrPlugin()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
})
