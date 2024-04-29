# Changelog

**All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org).**

## 0.6.8

- add [polyfill](https://github.com/davidenke/context-filter-polyfill) for HTML Canvas `filter` methods on Safari browser

## 0.6.13

- update linear gradients for Camera Filter Tool
- A11Y changes for Camera Filter Tool

## 0.7.0

- add Rollup banner plugin to output `use client` on React Client Components
- add Chart module with SVG components for base container, bar plots, point plots, X axis, Y Axis, tooltips, guidelines, and handling overflows
- refactor Source Selector for greater modularity, individually export the Message, Point Selector, and Selection List components.

## 0.8.0

- add `SupernovaThreeVector` widget
- extract `ImageStacker` into atomic component

## 0.9.0

- extend `Charts.Base` wrapper with labels
- add `useAxis` hook
- add `LightCurvePlot`
- refactor `ColorTool` to perform callbacks correctly when images load from cache

## 0.9.2

- add `crossOrigin = "anonymous"` to `useFilteredImages`

## 0.9.3

- Firefox and Safari compatibility fixes for `LightCurvePlot`

## 0.9.4

- remove label space if not filled by a label
- move `MagnitudeSlider` outside of SVG for Safari compatibility

## 0.9.5

- move `Blinker` controls to overlay

## 0.9.7

- set `yMin` to always equal bottom of scatterplot, set `yMax` to always equal top.

## 0.9.8

- fix to `LightCurvePlot`
- change localization text

## 0.9.9

- add `AspectRatio` and `Controls` layouts
