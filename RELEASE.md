# Release Notes

Several tokens or moving parts may be out of place at any given point in time, preventing proper release Github tag and release creation, and deployment to npmjs.org. Care must be taken to ensure the following steps are taken before attempting to create new releases.

## Semantic Release Package

This monorepo makes use of the [semantic-release](https://www.npmjs.com/package/semantic-release) NPM package. This package runs automatically during the release scripts and if there are commits in any individual repo - which will trigger a new release for that package - and what the prefix on the conventional commits are (`fix`, `feat`) to determine the semantic version.

If all goes right you won't need to manually create the tagged release in Github upon merging into the `main` branch.

## Yarn Workspaces

The [release workflow](.github/workflows/release.yaml) will run `yarn release`, which then will run `yarn workspaces run release`, which ultimately runs `yarn release` in each individual package, which will ultimately run `semantic-release -e semantic-release-monorepo --debug`. It is this process that checks the commits to see if changes have occurred in each package and the prefix to the commit message.

## Repo Environment Variables

The Github repo has two sets of environment variables, the one related to releases is named `epo-react-lib`. This set contains two environment variables:

- `GH_TOKEN` - which is an `lsst-epo` Github org-level token with content read/write access on the repo, this typically expires after a year of creation
- `NPM_TOKEN` - which is a token created by one of the developers with access to the suite of `@rubin-epo/*` packages on npm.org, these typicaly expire after three months of creation

## Github Workflows

All PRs should from from `feature branch` -> `develop` -> `main`. Upon merging into main two workflows are launched:

1. One related to building and publishing to Storybook
2. Another for running the above workflow in the `Yarn Workspaces` section above, which will create the tagged release in Github and publish the new packages to npmjs.org

The `Release packages` logs are pretty straightforward, if the action fails it usually means there's a legit `yarn build` issue in a package, or one of the tokens has expired.

## Order of Operations

At times it will be necessary to make a change to `epo-react-lib`, and then use that change in `epo-widget-lib` or one of the other packes. The safest way to ensure this goes smoothly is to make your changes to `epo-react-lib` first then merge all the way to `main` so a new version of the `epo-react-lib` package gets released. You can then reference this new version of `epo-react-lib` in the `epo-widget-lib` package's `package.json` for your next development update.
