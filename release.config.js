/**
 * @type {import('semantic-release').GlobalConfig}
 */
const release = {
  branches: ["main"],
  extends: "semantic-release-monorepo",
  plugins: [
    "semantic-release-monorepo", // This WON'T work
  ],
};

export default release;
