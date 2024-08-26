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
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "dist", label: "epo-widget-lib" }],
      },
    ],
  ],
};

export default release;
