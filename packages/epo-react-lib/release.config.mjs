/**
 * @type {import('semantic-release').GlobalConfig}
 */
const release = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
      },
    ],
  ],
};

export default release;
