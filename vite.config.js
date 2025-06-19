import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isPublisher = mode === 'publisher';
  
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: '/',
    build: {
      outDir: isPublisher ? 'dist-publisher' : 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        input: isPublisher 
          ? path.resolve(__dirname, 'src/publisher.html')
          : path.resolve(__dirname, 'index.html'),
        output: {
          manualChunks: undefined,
        },
      },
    },
    server: {
      allowedHosts: [
        '5173-i9l4vaxy1hlnjk7y22wy6-72bda4a3.manusvm.computer',
        '5174-i9l4vaxy1hlnjk7y22wy6-72bda4a3.manusvm.computer',
        '5175-i9l4vaxy1hlnjk7y22wy6-72bda4a3.manusvm.computer',
        'publisher.transitionmarketingai.com',
        'localhost',
        '127.0.0.1'
      ],
      cors: true,
      strictPort: true,
      port: 5174,
    },
  };
});
