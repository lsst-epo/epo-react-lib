import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "EPOLib",
      formats: ["es", "umd"],
      fileName: (format) => `epo-lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "flickity",
        "react-player/youtube",
        "react-uid",
        "i18next",
        "react-i18next",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-player/youtube": "ReactPlayer",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/atomic": resolve(__dirname, "./src/atomic"),
      "@/form": resolve(__dirname, "./src/form"),
      "@/helpers": resolve(__dirname, "./src/helpers"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/layout": resolve(__dirname, "./src/layout"),
      "@/lib": resolve(__dirname, "./src/lib"),
      "@/styles": resolve(__dirname, "./src/styles"),
      "@/svg": resolve(__dirname, "./src/svg"),
      "@/types": resolve(__dirname, "./src/types"),
    },
  },
});
