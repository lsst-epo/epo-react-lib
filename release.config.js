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
      },
    ],
  ],
};

export default release;
