import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ insertTypesEntry: true, copyDtsFiles: true }), react()],
  root: "./",
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: [
        "@castiron/style-mixins",
        "@headlessui/react",
        "flickity",
        "focus-trap",
        "i18next",
        "next/link",
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-i18next",
        "react-player/youtube",
        "react-share",
        "react-slider",
        "react-uid",
        "styled-components",
      ],
      output: {
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
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
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/atomic": resolve(__dirname, "./src/atomic"),
      "@/content-blocks": resolve(__dirname, "./src/content-blocks"),
      "@/contexts": resolve(__dirname, "./src/contexts"),
      "@/form": resolve(__dirname, "./src/form"),
      "@/helpers": resolve(__dirname, "./src/helpers"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/layout": resolve(__dirname, "./src/layout"),
      "@/lib": resolve(__dirname, "./src/lib"),
      "@/storybook": resolve(__dirname, "./.storybook"),
      "@/styles": resolve(__dirname, "./src/styles"),
      "@/svg": resolve(__dirname, "./src/svg"),
      "@/types": resolve(__dirname, "./src/types"),
    },
  },
});
