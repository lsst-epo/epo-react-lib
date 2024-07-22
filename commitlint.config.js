import { readdirSync } from "fs";
const DEFAULT_SCOPES = ["repo"];

const packageDirNames = readdirSync("./packages", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => dir.name);

const scopes = DEFAULT_SCOPES.concat(packageDirNames);

export default {
  extends: ["@commitlint/config-conventional", "monorepo"],
  rules: {
    "scope-enum": [2, "always", scopes],
  },
};
