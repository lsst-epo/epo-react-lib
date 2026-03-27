# EPO React Libraries

React libraries developed for Rubin Education & Public Outreach.

## Packages

### epo-react-lib

A lowest level building blocks library containing core styling and low level components that can be used across many projects. Other libraries in this repository may use `epo-react-lib` to build more complex components.

### epo-widget-lib

Scientific discovery widgets developed for education investigations.

## Workspaces

Each package is its own workspace. [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) give each package it's own workspace area while sharing common dependencies through a top-level `node_modules` folder. An advantage of this setup is that if one package is installed by another, it will symlink the package instead of installing from the online source.

### Yarn versions for Workspaces

When you are making updates to both `epo-react-lib` and `epo-widget-lib` and you need to reference one from the other you will need to update the `package.json` version to reference the development version. If you're using Yarn version `1.x` you'll need to manually update the target package's `package.json` to get the local version of the requested package installed.

For example:

```
/packages/epo-react-lib
/packages/epo-widget-lib
```

In the above example if you made changes to `epo-react-lib` and want to reference them locally in `epo-widget-lib` you would modify the dependency version as such:

`/packages/epo-widget-lib/package.json`:
```
...
dependencies: {
   "@rubin-epo/epo-react-lib": "0.0.0-development",
}
...
```

The key part here is `0.0.0-development` which is the value of the `version` property in `packages/epo-react-lib/package.json`.

After you update the `package.json`, run `yarn install` in the root-level of this project for Yarn workspaces to resolve the local dependencies. **Just be mindful not to check this change in!**

### Local Development in Application Repos

If you are testing an `epo-react-lib` or `epo-widget-lib` update and need to reference the local version of either package use `yarn link`, for example:

```
cd packages/epo-react-lib
yarn link
```

Then in your application folder:

```
cd rubin-obs-client
yarn link @rubin-epo/epo-react-lib
```

Then:

```
yarn
```

You can confirm that the installation is symlinked by then going into `./node_modules/@rubin-epo/` and running `ls -l` to see the symlink