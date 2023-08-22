import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component": "/src/components",
      "@page": "/src/pages",
      "@assets": "/src/assets",
      "@hook": "/src/hooks",
      "@data": "/src/data",
    },
  },
});
