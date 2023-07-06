import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import banner2 from "rollup-plugin-banner2";

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
    minify: false,
    lib: {
      entry: {
        main: resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles/index.ts"),
        Accordion: resolve(__dirname, "src/atomic/Accordion/Accordion.tsx"),
        Button: resolve(__dirname, "src/atomic/Button/Button.tsx"),
        Buttonish: resolve(__dirname, "src/atomic/Buttonish/Buttonish.tsx"),
        CircularLoader: resolve(
          __dirname,
          "src/atomic/CircularLoader/CircularLoader.tsx"
        ),
        ColorSwatch: resolve(
          __dirname,
          "src/atomic/ColorSwatch/ColorSwatch.tsx"
        ),
        ExpandToggle: resolve(
          __dirname,
          "src/atomic/ExpandToggle/ExpandToggle.tsx"
        ),
        ExternalLink: resolve(
          __dirname,
          "src/atomic/ExternalLink/ExternalLink.tsx"
        ),
        Figure: resolve(__dirname, "src/atomic/Figure/Figure.tsx"),
        Image: resolve(__dirname, "src/atomic/Image/Image.tsx"),
        Link: resolve(__dirname, "src/atomic/Link/Link.tsx"),
        MixedLink: resolve(__dirname, "src/atomic/MixedLink/MixedLink.tsx"),
        ProgressBar: resolve(
          __dirname,
          "src/atomic/Progress/Bar/ProgressBar.tsx"
        ),
        Marker: resolve(
          __dirname,
          "src/atomic/Progress/Marker/ProgressMarker.tsx"
        ),
        ProgressRadial: resolve(
          __dirname,
          "src/atomic/Progress/Radial/ProgressRadial.tsx"
        ),
        ResponsiveImage: resolve(
          __dirname,
          "src/atomic/ResponsiveImage/ResponsiveImage.tsx"
        ),
        Share: resolve(__dirname, "src/atomic/Share"),
        Toast: resolve(__dirname, "src/atomic/Toast/Toast.tsx"),
        Video: resolve(__dirname, "src/atomic/Video/Video.tsx"),
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
        HorizontalSlider: resolve(
          __dirname,
          "src/form/HorizontalSlider/HorizontalSlider.tsx"
        ),
        Input: resolve(__dirname, "src/form/Input/Input.tsx"),
        Password: resolve(
          __dirname,
          "src/form/Input/patterns/Password/Password.tsx"
        ),
        Select: resolve(__dirname, "src/form/Select/Select.tsx"),
        SelectListbox: resolve(
          __dirname,
          "src/form/SelectListbox/SelectListbox.tsx"
        ),
        Switch: resolve(__dirname, "src/form/Switch/Switch.tsx"),
        BasicModal: resolve(__dirname, "src/layout/BasicModal/BasicModal.tsx"),
        CarouselLayout: resolve(__dirname, "src/layout/Carousel/Carousel.tsx"),
        Columns: resolve(__dirname, "src/layout/Columns/Columns.tsx"),
        Container: resolve(__dirname, "src/layout/Container/Container.tsx"),
        Grid: resolve(__dirname, "src/layout/Grid/Grid.tsx"),
        MasonryGrid: resolve(
          __dirname,
          "src/layout/MasonryGrid/MasonryGrid.tsx"
        ),
        SlideoutMenu: resolve(__dirname, "src/layout/SlideoutMenu"),
        IconComposer: resolve(
          __dirname,
          "src/svg/IconComposer/IconComposer.tsx"
        ),
        icons: resolve(__dirname, "src/svg/icons"),
      },
      formats: [defaultFormat, "cjs"],
      fileName: (format, name) =>
        `${name}.${format === defaultFormat ? "js" : format}`,
    },
    rollupOptions: {
      plugins: [
        banner2((chunk) => {
          const useClient = `"use client"\n\n`;
          const hooks = ["useState", "useEffect", "useRef", "useContext"];
          const { importedBindings } = chunk;

          if (Object.keys(importedBindings).length > 0) {
            if (
              importedBindings["styled-components"] &&
              importedBindings["styled-components"].length > 0
            ) {
              return useClient;
            }

            if (
              importedBindings["react"] &&
              importedBindings["react"].filter((value) => hooks.includes(value))
            ) {
              return useClient;
            }

            if (
              importedBindings["react-i18next"] &&
              importedBindings["react-i18next"].includes("useTranslation")
            ) {
              return useClient;
            }
          }
        }),
      ],
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
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
