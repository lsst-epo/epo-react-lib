const StyleDictionaryPackage = require("style-dictionary");

const legacyPlatforms = {
  "library/legacy/colors/js": {
    transforms: ["attribute/cti", "name/cti/camel", "size/rem", "color/hex"],
    buildPath: "dist/web/library/",

    options: {
      fileHeader: "LegacyTokens",
    },
    files: [
      {
        destination: "tokens.legacy.js",
        format: "javascript/es6",
        filter: {
          attributes: {
            category: "color",
            legacy: true,
          },
        },
      },
    ],
  },
  "library/legacy/css/colors/js": {
    buildPath: "dist/web/library/",
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
    filter: {
      attributes: {
        legacy: true,
      },
    },
    files: [
      {
        destination: "tokens.legacy.css",
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
};
const platforms = {
  "library-legacy": legacyPlatforms,
  rubin: {},
};

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(brand) {
  return {
    include: [],
    source: ["src/globals/**/*.json", `src/brand/${brand}/*.json`],
    platforms: platforms[brand],
  };
}

// REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionaryPackage);

StyleDictionaryPackage.registerFormat({
  name: "json/flat",
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

// I wanted to use this custom transform instead of the "prefix" property applied to the platforms
// because I wanted to apply the "token" prefix only to actual tokens and not to the aliases
// but I've found out that in case of "name/cti/constant" the prefix was not respecting the case for the "prefix" part
//
// StyleDictionaryPackage.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });

StyleDictionaryPackage.registerFileHeader({
  name: "LegacyTokens",
  fileHeader: (defaultMessage) => {
    return [
      `Legacy library tokens`,
      `Avoid using these`,
      ``,
      ...defaultMessage,
    ];
  },
});

StyleDictionaryPackage.registerTransform({
  name: "size/pxToPt",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "pt");
  },
});

StyleDictionaryPackage.registerTransform({
  name: "size/pxToPt",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "pt");
  },
});

StyleDictionaryPackage.registerTransform({
  name: "size/pxToDp",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "dp");
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: "tokens-js",
  transforms: ["name/cti/constant", "size/px", "color/hex"],
});

StyleDictionaryPackage.registerTransformGroup({
  name: "tokens-json",
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
});

StyleDictionaryPackage.registerTransformGroup({
  name: "tokens-scss",
  // to see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
  transforms: ["name/cti/kebab", "time/seconds", "size/px", "color/css"],
});

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["rubin", "library-legacy"].map(function (platform) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${platform}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(platform)
  );

  StyleDictionary.buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
