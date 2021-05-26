<!-- https://github.com/orbitdb/repo-template -->

# Node ESM package template

This repository is meant to serve as a general template for how to set up repositories publishing a node package on npm. Use this repository as a way of finding example files and use the following checklist to ensure that you've set up the repository correctly.

# Install checklist

Go through this checklist after creating a repository with this template.

- [ ] Update fields in [package.json](./package.json), especially `"name"`, `"description"`, `"version"` and `"author".`

- [ ] Check the available features and see how use or remove them.

  - [Linting](./docs/linting/linting.md#linting)
  - [Formatting](./docs/formatting/formatting.md#formatting)
  - [Production mode](./docs/production_mode/production_mode.md#production-mode)
  - [Testing](./docs/testing/testing.md#testing)
  - [Code coverage](./docs/coverage/coverage.md#coverage)
  - [CommonJS compatibility](./docs/commonjs_compat/commonjs_compat.md#commonjs-compatibility)
  - [npm auto publish](./docs/auto_publish/auto_publish.md#auto-publish-on-npm)
  - [import resolution](./docs/import_resolution/import_resolution.md#import-resolution)

- [ ] Replace this readme by [readme.template.md](./readme.template.md)

# Things to know

- Node.js Long Term Support version should be used while coding and to use the package published on npm. At the time of writing this documentation it means version 14.17.0.
- Default branch of the repository is named _main_. It can be renamed in repository settings
