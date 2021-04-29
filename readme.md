<!-- https://github.com/orbitdb/repo-template -->

# Jsenv node package template

This repository is meant to serve as a general template for how to set up repositories publishing a node package on npm. Use this repository as a way of finding example files, and use the following checklist to ensure that you've set up the repository correctly.

**Warning**: It's a beta version.

# Install checklist

Go through this checklist after creating your repository.

## ESLint review

The codebase uses [ESLint](https://eslint.org) to lint files.

If you want to keep ESLint, check [How to use ESLint](./docs/eslint/eslint.md#How-to-use-eslint). Otherwise see [How to remove ESLint](#./docs/prettier/prettier.md#How-to-remove-eslint).

- [ ] ESLint review done

## Prettier review

The codebase uses [prettier](https://prettier.io) to ensure files formatting is coherent and pretty.

If you want to keep prettier, check [How to use Prettier](./docs/prettier/prettier.md#How-to-use-prettier). Otherwise see [How to remove prettier](./docs/prettier/prettier.md#How-to-remove-prettier)

- [ ] Prettier review done

## Test review

All test files are inside the [test/](./test/) directory and ends with `.test.js`.

If you want to keep test files check [How to use tests](./docs/tests/tests.md#How-to-use-tests). Otherwise see [How to remove tests](./docs/tests/tests.md#How-to-remove-tests)

- [ ] Test review done

## Coverage review

Code coverage report can be generated and are connected to codecov to monitor them over time and integrate coverage to pull requests.

If you want to keep code coverage check [How to use code coverage](./docs/coverage/coverage.md#How-to-use-code-coverage). Otherwise see [How to remove code coverage](./docs/coverage/coverage.md#How-to-remove-code-coverage)

- [ ] Coverage review done

## Production mode review

The code of this npm package behaves differently when executed with `--conditions=production`.

If you want to keep this ability, check [How to use production mode](./docs/production/production.md#how-to-use-production-mode). Otherwise see [How to remove production mode](./docs/production/production.md#how-to-remove-production-mode).

- [ ] Production mode review done

## Build review

TODO

- [ ] Build review done

## Replace readme

TODO

- [ ] Readme replaced
