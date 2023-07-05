import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import banner2 from "rollup-plugin-banner2";

const defaultFormat = "es";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  root: "./",
  build: {
    minify: false,
    lib: {
      entry: {
        main: resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles"),
        Accordion: resolve(__dirname, "src/atomic/Accordion/Accordion.tsx"),
        Button: resolve(__dirname, "src/atomic/Button"),
        Buttonish: resolve(__dirname, "src/atomic/Buttonish"),
        CircularLoader: resolve(__dirname, "src/atomic/CircularLoader"),
        ColorSwatch: resolve(__dirname, "src/atomic/ColorSwatch"),
        ExpandToggle: resolve(__dirname, "src/atomic/ExpandToggle"),
        ExternalLink: resolve(__dirname, "src/atomic/ExternalLink"),
        Figure: resolve(__dirname, "src/atomic/Figure"),
        Image: resolve(__dirname, "src/atomic/Image"),
        Link: resolve(__dirname, "src/atomic/Link"),
        MixedLink: resolve(__dirname, "src/atomic/MixedLink"),
        ProgressBar: resolve(__dirname, "src/atomic/Progress/Bar"),
        Marker: resolve(__dirname, "src/atomic/Progress/Marker"),
        ProgressRadial: resolve(__dirname, "src/atomic/Progress/Radial"),
        ResponsiveImage: resolve(__dirname, "src/atomic/ResponsiveImage"),
        Share: resolve(__dirname, "src/atomic/Share"),
        Toast: resolve(__dirname, "src/atomic/Toast"),
        Video: resolve(__dirname, "src/atomic/Video"),
        SimpleTable: resolve(__dirname, "src/content-blocks/SimpleTable"),
        ComplexTable: resolve(__dirname, "src/content-blocks/ComplexTable"),
        Error: resolve(__dirname, "src/form/Error"),
        FormButtons: resolve(__dirname, "src/form/FormButtons"),
        FormField: resolve(__dirname, "src/form/FormField"),
        HorizontalSlider: resolve(__dirname, "src/form/HorizontalSlider"),
        Input: resolve(__dirname, "src/form/Input"),
        Password: resolve(__dirname, "src/form/Input/patterns/Password"),
        Select: resolve(__dirname, "src/form/Select"),
        SelectListbox: resolve(__dirname, "src/form/SelectListbox"),
        Switch: resolve(__dirname, "src/form/Switch"),
        BasicModal: resolve(__dirname, "src/layout/BasicModal"),
        CarouselLayout: resolve(__dirname, "src/layout/Carousel"),
        Columns: resolve(__dirname, "src/layout/Columns"),
        Container: resolve(__dirname, "src/layout/Container"),
        Grid: resolve(__dirname, "src/layout/Grid"),
        MasonryGrid: resolve(__dirname, "src/layout/MasonryGrid"),
        SlideoutMenu: resolve(__dirname, "src/layout/SlideoutMenu"),
        IconComposer: resolve(__dirname, "src/svg/IconComposer"),
        icons: resolve(__dirname, "src/svg/icons"),
      },
      formats: [defaultFormat, "cjs"],
      fileName: (format, name) =>
        `${name}.${format === defaultFormat ? "js" : format}`,
    },
    rollupOptions: {
      plugins: [
        banner2(({ fileName }) =>
          fileName.includes("styles") ? `"use client"\n\n` : ""
        ),
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
        sourcemap: true,
        // link *.js.map files to copied lib files. see viteStaticCopy
        sourcemapPathTransform: (relativeSourcePath) => {
          return `./${relativeSourcePath.split("/").pop()}`;
        },
        sourcemapExcludeSources: true,
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
