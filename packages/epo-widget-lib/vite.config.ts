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
        SupernovaThreeVector: resolve(
          __dirname,
          "src/widgets/SupernovaThreeVector/index.tsx"
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
              importedBindings["react-i18next"] &&
              importedBindings["react-i18next"].length > 0
            ) {
              return useClient;
            }

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
        "d3-array",
        "d3-geo",
        "d3-geo-projection",
        "flickity",
        "focus-trap",
        "i18next",
        /^lodash/,
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
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
