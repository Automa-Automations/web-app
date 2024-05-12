import { defineConfig } from "vite";

export default defineConfig({
  // other config options...
  server: {
    // Ensure Vite serves files with correct headers for cache invalidation
    headers: {
      "Cache-Control": "no-store",
    },
  },
});
