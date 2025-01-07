import cssnano from "cssnano";
import preset from "postcss-preset-env";
import utopia from "postcss-utopia";

export default {
  plugins: [
    preset(),
    cssnano({ preset: "default" }),
    utopia({ minWidth: 320, maxWidth: 1240 }),
  ],
};
