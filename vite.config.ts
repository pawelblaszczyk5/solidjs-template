import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "es2017",
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@lib": "/src/lib",
      "@X": "/src/features/X",
    },
  },
});
