/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    includeSource: ["src/**/*.{ts,tsx}"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
