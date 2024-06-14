const path = "dist/web/legacy";

const legacyPlatform = {
  "legacy/colors/js": {
    transforms: ["attribute/cti", "name/cti/camel", "size/rem", "color/hex"],
    buildPath: `${path}/palette/`,

    options: {
      fileHeader: "LegacyTokens",
    },
    files: [
      {
        destination: "index.js",
        format: "javascript/es6",
        filter: {
          attributes: {
            category: "color",
            legacy: true,
          },
        },
      },
      {
        destination: "index.cjs",
        format: "javascript/module-flat",
        filter: {
          attributes: {
            category: "color",
            legacy: true,
          },
        },
      },
      {
        format: "typescript/es6-declarations",
        destination: "index.d.ts",
        filter: {
          attributes: {
            category: "color",
            legacy: true,
          },
        },
      },
    ],
  },
  "legacy/colors/css": {
    buildPath: `${path}/palette/`,
    transforms: [
      "attribute/cti",
      "name/cti/camel",
      "time/seconds",
      "content/icon",
      "size/rem",
      "color/css",
    ],
    options: {
      fileHeader: "LegacyTokens",
    },
    files: [
      {
        destination: "index.css",
        format: "css/variables",
        filter: {
          attributes: {
            category: "color",
            legacy: true,
          },
        },
      },
    ],
  },
  "legacy/tokens/css": {
    buildPath: `${path}/tokens/`,
    transformGroup: "tokens-js",
    options: {
      fileHeader: "LegacyTokens",
    },
    files: [
      {
        destination: "index.css",
        format: "css/variables",
        filter: "legacyToken",
      },
    ],
  },
  "legacy/tokens/js": {
    transformGroup: "tokens-js",
    buildPath: `${path}/tokens/`,

    options: {
      fileHeader: "LegacyTokens",
    },
    files: [
      {
        destination: "index.js",
        format: "javascript/es6",
        filter: "legacyToken",
      },
      {
        destination: "index.cjs",
        format: "javascript/module-flat",
        filter: "legacyToken",
      },
      {
        format: "typescript/es6-declarations",
        destination: "index.d.ts",
        filter: "legacyToken",
      },
    ],
  },
};

module.exports = legacyPlatform;
