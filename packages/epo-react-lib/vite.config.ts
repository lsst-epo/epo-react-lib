import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), dts({ insertTypesEntry: true }), react()],
  root: "./",
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, name) => `epo-lib-${name}.${format}.js`,
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
        interop: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-player/youtube": "ReactPlayer",
        },
      },
    },
  },
});
