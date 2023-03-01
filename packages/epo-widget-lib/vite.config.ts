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
        "use-resize-observer",
        "@rubin-epo/epo-react-lib",
      ],
      output: {
        interop: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-player/youtube": "ReactPlayer",
          "use-resize-observer": "useResizeObserver",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/widgets": resolve(__dirname, "./src/widgets"),
      "@/storybook": resolve(__dirname, "./.storybook"),
    },
  },
});
