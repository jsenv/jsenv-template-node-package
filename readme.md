<!-- https://github.com/orbitdb/repo-template -->

# Jsenv node package template

This repository is meant to serve as a general template for how to set up repositories publishing a node package on npm. Use this repository as a way of finding example files, and use the following checklist to ensure that you've set up the repository correctly.

**Warning**: It's a beta version.

# Install checklist

Go through this checklist after creating your repository.

## ESLint review

The codebase uses [ESLint](https://eslint.org) to lint files.

If you want to keep ESLint, check how it is used in [How to use ESLint](./docs/eslint/eslint.md#How-to-use-eslint). Otherwise see [How to remove ESLint](#./docs/prettier/prettier.md#How-to-remove-eslint).

- [ ] ESLint review done

## Prettier review

The codebase uses [prettier](https://prettier.io) to ensure files formatting is coherent and pretty.

If you want to keep prettier check how it is used in [How to use Prettier](./docs/prettier/prettier.md#How-to-use-prettier). Otherwise see [How to remove prettier](./docs/prettier/prettier.md#How-to-remove-prettier)

- [ ] Prettier review done

## Test review

All test files are inside the [test/](./test/) directory and ends with `.test.js`.

If you want to keep test files check how to use them in [How to use tests](./docs/tests/tests.md#How-to-use-tests). Otherwise see [How to remove tests](#How-to-remove-tests)

- [ ] Test review done

## Github workflow review

document the need for codecov token during codecov
document the need for npm token during auto publish

- [ ] GitHub workflow review done

## Build review

- [ ] Build review done

## Replace readme

- [ ] Readme replaced

</details>

# Tests usage

</details>
