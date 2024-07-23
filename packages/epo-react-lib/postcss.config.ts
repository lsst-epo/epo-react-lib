import cssnano from "cssnano";
import normalize from "postcss-normalize";
import preset from "postcss-preset-env";
import utopia from "postcss-utopia";

export default {
  plugins: [
    preset(),
    normalize({ forceImport: true }),
    cssnano({ preset: "default" }),
    utopia({ minWidth: 320, maxWidth: 1240 }),
  ],
};
