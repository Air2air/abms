import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { EsLinter, linterPlugin } from 'vite-tsconfig-paths
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig(configEnv => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    svgrPlugin(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
}))