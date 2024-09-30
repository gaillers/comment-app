import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      format: 'esm',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@shared': path.resolve(__dirname, 'src/shared'),

      '@services': path.resolve(__dirname, 'src/core/services'),
      '@store': path.resolve(__dirname, 'src/core/store'),

      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
    },
  },
  server: {
    host: 'localhost',
    port: 3030,
    hmr: {
      overlay: false, 
    },
  },
})