import cssnano from "cssnano";
import normalize from "postcss-normalize";
import preset from "postcss-preset-env";

export default {
  plugins: [
    preset(),
    normalize({ forceImport: true }),
    cssnano({ preset: "default" }),
  ],
};
