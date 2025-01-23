import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Ne définissez pas root ici, ou définissez-le sur '.' (la racine du projet)
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    },
    minify: 'esbuild',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
});
