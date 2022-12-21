import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: {
        "epo-lib": resolve(__dirname, "src/index.ts"),
        icons: resolve(__dirname, "src/svg/icons/index.ts"),
      },
      name: "EPOLib",
      formats: ["es", "cjs"],
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
