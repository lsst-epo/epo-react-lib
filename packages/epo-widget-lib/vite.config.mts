import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { sync } from "glob";
import banner2 from "rollup-plugin-banner2";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from "./package.json";

const defaultFormat = "es";

const packages = Object.fromEntries(
  sync(["src/widgets/*/index.tsx"], {
    ignore: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
  }).map((file) => {
    const path = resolve(__dirname, file);
    const name = dirname(path).split("/").pop();
    return [name, path];
  })
);

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
        ColorToolServer: resolve(
          __dirname,
          "src/widgets/ColorTool/lib/server.ts"
        ),
        ...packages,
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
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
        /^@rubin-epo\/epo-react-lib*/,
        /^lodash/,
        "next/link",
        "react/jsx-runtime",
        "react-player/base",
        "react-player/youtube",
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
