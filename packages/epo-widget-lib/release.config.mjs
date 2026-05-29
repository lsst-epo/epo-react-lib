/**
 * @type {import('semantic-release').GlobalConfig}
 */
const release = {
  tagFormat: '@rubin-epo/epo-widget-lib-v${version}',
  branches: [
    "release-react-v19",
    { name: "release-react-v18", range: "1.x", channel: "react-18" }
  ],
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
    ["@semantic-release/github"],
    ["@semantic-release/npm"],
  ],
};

export default release;
