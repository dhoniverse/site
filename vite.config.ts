import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'copy-service-worker',
          closeBundle() {
            // Copy service worker files to dist after build
            try {
              copyFileSync('service-worker.js', 'dist/service-worker.js');
              copyFileSync('register-sw.js', 'dist/register-sw.js');
              console.log('✓ Service worker files copied to dist/');
            } catch (err) {
              console.warn('Warning: Could not copy service worker files:', err);
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Ensure proper output structure
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate source maps for debugging
        sourcemap: false,
        // Optimize chunks
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      }
    };
});
