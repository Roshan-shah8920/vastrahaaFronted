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
    fs: {
      allow: ['.'],
    },
  },
  optimizeDeps: {
    exclude: [
      'aws-sdk',
      'mock-aws-s3',
      'nock',
      '@mapbox/node-pre-gyp',
      'jsonwebtoken',
      'bcrypt'
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'aws-sdk',
        'mock-aws-s3',
        'nock',
        '@mapbox/node-pre-gyp',
        'jsonwebtoken',
        'bcrypt'
      ],
    },
  },
});
