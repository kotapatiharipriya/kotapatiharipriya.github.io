import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Use root base path for GitHub Pages user site (username.github.io)
  // User sites deploy to root domain, so assets must be loaded from /
  base: "/",
  plugins: [react()],
  build: {
    // Emit asset names with hash for cache-busting on GitHub Pages
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
