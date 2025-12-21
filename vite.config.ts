import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const normalizeBase = (value?: string) => {
  if (!value) return "/";

  // Allow a relative base like "./" to produce relative asset URLs (useful for Pages and CDN setups).
  if (value.startsWith(".")) return value;

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

// https://vitejs.dev/config/
export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE_PATH),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
