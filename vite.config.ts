/**
 * @file vite.config.ts
 * @author Cerror
 * @description Vite构建配置文件
 * @created 2025-01-20
 * @updated 2025-01-20
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}); 