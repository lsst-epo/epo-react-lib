# EPO React Libraries

React libraries developed for Rubin Education & Public Outreach.

## Packages

### epo-react-lib

A lowest level building blocks library containing core styling and low level components that can be used across many projects. Other libraries in this repository may use `epo-react-lib` to build more complex components.

### epo-widget-lib

Scientific discovery widgets developed for education investigations.

## Workspaces

Each package is its own workspace. [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) give each package it's own workspace area while sharing common dependencies through a top-level `node_modules` folder. An advantage of this setup is that if one package is installed by another, it will symlink the package instead of installing from the online source.
