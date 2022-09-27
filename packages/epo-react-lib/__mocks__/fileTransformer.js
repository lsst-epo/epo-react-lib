import * as path from "path";

const process = (sourceText, sourcePath, options) => {
  return {
    code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
  };
};

export default { process };
