const path = require("path");

const process = (sourceText, sourcePath, options) => {
  return {
    code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
  };
};

module.exports = { process };
