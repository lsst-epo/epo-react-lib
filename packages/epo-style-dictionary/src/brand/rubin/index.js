const jsTransforms = [
  "attribute/cti",
  "name/cti/constant",
  "time/seconds",
  "content/icon",
  "color/css",
];

const cssTransforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
];

const filter = "onlyProduction";

const path = "dist/web/rubin/";

const rubinPlatform = {
  "rubin/css": {
    buildPath: path,
    transforms: cssTransforms,
    files: [
      {
        destination: "index.css",
        format: "css/variables",
        filter,
      },
    ],
  },
  "rubin/js": {
    buildPath: path,
    transforms: jsTransforms,
    files: [
      {
        destination: "index.js",
        format: "javascript/es6",
        filter,
      },
      {
        destination: "index.cjs",
        format: "javascript/module-flat",
        filter,
      },
      {
        format: "typescript/es6-declarations",
        destination: "index.d.ts",
        filter,
      },
    ],
  },
};

module.exports = rubinPlatform;
