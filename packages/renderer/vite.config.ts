/* eslint-env node */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { chrome } from '../../.electron-vendors.cache.json';
import { renderer } from 'unplugin-auto-expose';
import { join } from 'node:path';
import { injectAppVersion } from '../../version/inject-app-version-plugin.mjs';

const PACKAGE_ROOT = __dirname;
const PROJECT_ROOT = join(PACKAGE_ROOT, '../..');

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: PROJECT_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/',
    },
  },
  base: '',
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html'),
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
  plugins: [
    react(),
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, '../preload/src/index.ts'),
    }),
    injectAppVersion(),
  ],
});
