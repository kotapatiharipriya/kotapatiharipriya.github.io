import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base path for GitHub Pages deployment
  // This ensures assets are loaded correctly regardless of the deployment path
  base: "./",
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
