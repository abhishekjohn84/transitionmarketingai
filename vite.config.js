import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    allowedHosts: [
      '5173-i9l4vaxy1hlnjk7y22wy6-72bda4a3.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ],
    cors: true,
    strictPort: true,
    port: 5173,
  },
})
