import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { sync } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import banner2 from "rollup-plugin-banner2";
import postcss from "./postcss.config";
import { peerDependencies, dependencies } from "./package.json";

const defaultFormat = "es";

const packages = Object.fromEntries(
  sync(["src/atomic/*/index.tsx", "src/molecules/*/*.tsx"], {
    ignore: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
  }).map((file) => {
    const path = resolve(__dirname, file);
    const name = dirname(path).split("/").pop();
    return [name, path];
  })
);

const entry = {
  ...packages,
  main: resolve(__dirname, "src/index.ts"),
  styles: resolve(__dirname, "src/styles/index.ts"),
  Accordion: resolve(__dirname, "src/atomic/Accordion/Accordion.tsx"),
  CircularLoader: resolve(
    __dirname,
    "src/atomic/CircularLoader/CircularLoader.tsx"
  ),
  ColorSwatch: resolve(__dirname, "src/atomic/ColorSwatch/ColorSwatch.tsx"),
  ExpandToggle: resolve(__dirname, "src/atomic/ExpandToggle/ExpandToggle.tsx"),
  ExternalLink: resolve(__dirname, "src/atomic/ExternalLink/ExternalLink.tsx"),
  Link: resolve(__dirname, "src/atomic/Link/Link.tsx"),
  MixedLink: resolve(__dirname, "src/atomic/MixedLink/MixedLink.tsx"),
  ProgressBar: resolve(__dirname, "src/atomic/Progress/Bar/ProgressBar.tsx"),
  Marker: resolve(__dirname, "src/atomic/Progress/Marker/ProgressMarker.tsx"),
  ProgressRadial: resolve(
    __dirname,
    "src/atomic/Progress/Radial/ProgressRadial.tsx"
  ),
  Share: resolve(__dirname, "src/molecules/Share"),
  Toast: resolve(__dirname, "src/atomic/Toast/Toast.tsx"),
  SimpleTable: resolve(
    __dirname,
    "src/content-blocks/SimpleTable/SimpleTable.tsx"
  ),
  ComplexTable: resolve(
    __dirname,
    "src/content-blocks/ComplexTable/ComplexTable.tsx"
  ),
  Error: resolve(__dirname, "src/form/Error/Error.tsx"),
  FormButtons: resolve(__dirname, "src/form/FormButtons/FormButtons.tsx"),
  FormField: resolve(__dirname, "src/form/FormField/FormField.tsx"),
  Input: resolve(__dirname, "src/form/Input/Input.tsx"),
  Password: resolve(__dirname, "src/form/Input/patterns/Password/Password.tsx"),
  Select: resolve(__dirname, "src/form/Select/Select.tsx"),
  SelectListbox: resolve(__dirname, "src/form/SelectListbox/SelectListbox.tsx"),
  Switch: resolve(__dirname, "src/form/Switch/Switch.tsx"),
  BasicModal: resolve(__dirname, "src/layout/BasicModal/BasicModal.tsx"),
  CarouselLayout: resolve(__dirname, "src/layout/Carousel/Carousel.tsx"),
  Columns: resolve(__dirname, "src/layout/Columns/Columns.tsx"),
  Grid: resolve(__dirname, "src/layout/Grid/Grid.tsx"),
  SlideoutMenu: resolve(__dirname, "src/layout/SlideoutMenu"),
  IconComposer: resolve(__dirname, "src/svg/IconComposer/index.tsx"),
  icons: resolve(__dirname, "src/svg/icons"),
  StyledComponentsRegistry: resolve(__dirname, "src/styles/registry.tsx"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: "./src",
      exclude: ["./**/*.stories.tsx", "./**/*.test.tsx"],
      rollupTypes: true,
    }),
  ],
  root: "./",
  css: {
    postcss,
  },
  build: {
    minify: false,
    lib: {
      entry,
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
        /^lodash/,
        /^next/,
        "react/jsx-runtime",
        "react-player/base",
        "react-player/youtube",
        /^react-share/,
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
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
