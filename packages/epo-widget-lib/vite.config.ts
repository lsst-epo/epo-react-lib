import { defineConfig } from "vite";
import { resolve } from "path";
import banner2 from "rollup-plugin-banner2";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const defaultFormat = "es";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: "./src",
      exclude: ["./**/*.stories.tsx", "./**/*.test.tsx"],
    }),
  ],
  root: "./",
  build: {
    lib: {
      entry: {
        Atomic: resolve(__dirname, "src/atomic/index.tsx"),
        CameraFilter: resolve(
          __dirname,
          "src/widgets/CameraFilter/CameraFilter.tsx"
        ),
        Charts: resolve(__dirname, "src/charts/index.tsx"),
        ColorTool: resolve(__dirname, "src/widgets/ColorTool/ColorTool.tsx"),
        ColorToolServer: resolve(
          __dirname,
          "src/widgets/ColorTool/lib/server.ts"
        ),
        FilterTool: resolve(__dirname, "src/widgets/FilterTool/FilterTool.tsx"),
        SourceSelector: resolve(
          __dirname,
          "src/widgets/SourceSelector/index.tsx"
        ),
      },
      formats: [defaultFormat, "cjs"],
      fileName: (format, name) =>
        `${name}.${format === defaultFormat ? "js" : format}`,
    },
    rollupOptions: {
      plugins: [
        banner2((chunk) => {
          const useClient = `"use client"\n\n`;
          const { importedBindings } = chunk;
          const dependencies = Object.values(importedBindings).flat();

          if (dependencies.length > 0) {
            if (
              importedBindings["styled-components"] &&
              importedBindings["styled-components"].length > 0
            ) {
              return useClient;
            }

            if (dependencies.some((value) => value.includes("use"))) {
              return useClient;
            }
          }
        }),
      ],
      external: [
        "@castiron/style-mixins",
        "@headlessui/react",
        /^@rubin-epo\/epo-react-lib*/,
        "context-filter-polyfill",
        "flickity",
        "focus-trap",
        "i18next",
        "lodash/flattenDeep",
        "lodash/find",
        "lodash/isEmpty",
        "next/link",
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-i18next",
        "react-player/youtube",
        "react-share",
        "react-slider",
        "react-uid",
        "skia-canvas",
        "styled-components",
        "use-resize-observer",
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
          "use-resize-observer": "useResizeObserver",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/atomic": resolve(__dirname, "./src/atomic"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/lib": resolve(__dirname, "./src/lib"),
      "@/storybook": resolve(__dirname, "./.storybook"),
      "@/styles": resolve(__dirname, "./src/styles"),
      "@/types": resolve(__dirname, "./src/types"),
      "@/widgets": resolve(__dirname, "./src/widgets"),
    },
  },
});
