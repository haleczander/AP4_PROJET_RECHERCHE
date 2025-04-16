import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist", // Dossier de sortie
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.js"), // Point d'entrée principal
      output: {
        entryFileNames: "bundle.min.js", // Nom du fichier minifié
        format: "iife", // Format adapté pour les navigateurs (Immediately Invoked Function Expression)
      },
    },
    minify: "esbuild", // Utiliser esbuild pour la minification (rapide et efficace)
    sourcemap: false, // Désactiver les sourcemaps (peut être activé si nécessaire)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias pour les imports simplifiés
    },
  },
});
