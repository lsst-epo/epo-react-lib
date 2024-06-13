const StyleDictionary = require("style-dictionary");
const rubinPlatform = require("./src/brand/rubin");
const legacyPlatform = require("./src/brand/legacy");

const platforms = {
  legacy: legacyPlatform,
  rubin: rubinPlatform,
};

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(brand) {
  return {
    include: ["src/globals/**/*.json"],
    source: [`src/brand/${brand}/*.json`],
    platforms: platforms[brand],
  };
}

// REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
// console.log(StyleDictionary);

StyleDictionary.registerFormat({
  name: "json/flat",
  formatter: function (dictionary) {
    return JSON.stringify(dictionary.allProperties, null, 2);
  },
});

// I wanted to use this custom transform instead of the "prefix" property applied to the platforms
// because I wanted to apply the "token" prefix only to actual tokens and not to the aliases
// but I've found out that in case of "name/cti/constant" the prefix was not respecting the case for the "prefix" part
//
// StyleDictionary.registerTransform({
//     name: 'name/prefix-token',
//     type: 'name',
//     matcher: function(prop) {
//         return prop.attributes.category !== 'alias';
//     },
//     transformer: function(prop) {
//         return `token-${prop.name}`;
//     }
// });

StyleDictionary.registerFilter({
  name: "onlyProduction",
  matcher: function (token) {
    return !token.attributes.atomic;
  },
});

StyleDictionary.registerFileHeader({
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

StyleDictionary.registerTransform({
  name: "size/pxToPt",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "pt");
  },
});

StyleDictionary.registerTransform({
  name: "size/pxToPt",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "pt");
  },
});

StyleDictionary.registerTransform({
  name: "size/pxToDp",
  type: "value",
  matcher: function (prop) {
    return prop.value.match(/^[\d.]+px$/);
  },
  transformer: function (prop) {
    return prop.value.replace(/px$/, "dp");
  },
});

StyleDictionary.registerTransformGroup({
  name: "tokens-js",
  transforms: ["name/cti/constant", "size/px", "color/hex"],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-json",
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-scss",
  // to see the pre-defined "scss" transformation use: console.log(StyleDictionary.transformGroup['scss']);
  transforms: ["name/cti/kebab", "time/seconds", "size/px", "color/css"],
});

StyleDictionary.registerFilter({
  name: "legacyToken",
  matcher: function (token) {
    return (
      token.attributes.legacy === true && token.attributes.category !== "color"
    );
  },
});

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["rubin", "legacy"].map(function (platform) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${platform}]`);

  const dictionary = StyleDictionary.extend(getStyleDictionaryConfig(platform));

  dictionary.buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
