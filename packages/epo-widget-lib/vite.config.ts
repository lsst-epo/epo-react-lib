import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ insertTypesEntry: true }), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "EPO Widget Lib",
      formats: ["es", "umd"],
      fileName: (format) => `epo-widget-lib.${format}.js`,
    },
  },
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/widgets": resolve(__dirname, "./src/widgets"),
    },
  },
});
