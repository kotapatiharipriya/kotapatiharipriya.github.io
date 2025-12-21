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
    // Emit deterministic asset names so the deployed site references consistent files.
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
