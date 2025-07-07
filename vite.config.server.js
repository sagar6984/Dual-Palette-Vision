import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(process.cwd(), "server/node-build.js"),
      name: "server",
      fileName: "node-build",
      formats: ["es"],
    },
    outDir: "dist/server",
    emptyOutDir: true,
    rollupOptions: {
      external: ["express", "cors", "path", "url"],
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(process.cwd(), "./shared"),
    },
  },
});
