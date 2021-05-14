<!-- https://github.com/orbitdb/repo-template -->

# Node ESM package template

This repository is meant to serve as a general template for how to set up repositories publishing a node package on npm. Use this repository as a way of finding example files and use the following checklist to ensure that you've set up the repository correctly.

# Install checklist

Go through this checklist after creating a repository with this template.

- [ ] Update fields in [package.json](./package.json), especially `"name"`, `"description"` and `"author".`

- [ ] Review features

  Overview of the available features, explaining how use or remove them.

  - [Linting](./docs/linting/linting.md)
  - [Formatting](./docs/formatting/formatting.md)
  - [Production mode](./docs/production_mode/production_mode.md)
  - [Testing](./docs/testing/testing.md)
  - [Code coverage](./docs/coverage/coverage.md)
  - [CommonJS backward compatibility](./docs/commonjs_compat/commonjs_compat.md)
  - [npm auto publish](./docs/auto_publish/auto_publish.md)
  - [import resolution](./docs/import_resolution/import_resolution.md)

- [ ] Replace this readme by [readme.template.md](./readme.template.md)
