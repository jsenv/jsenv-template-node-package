# Development

If you want to work on this project, read this documentation. It describes all the expected steps from the moment you start coding to the moment a new version is published on npm. This documentation also explains how to configure and use the tools available in the repository.

# Table of contents

- [Setup](#Setup)
- [Start coding](#Start-coding)
- [Linting](#Linting)
- [Formatting](#Formatting)
- [Debugging](#Debugging)
- [Testing](#Testing)
- [Creating a pull request](#Creating-a-pull-request)
- [Puslish on npm](#Publish-on-npm)

# Setup

The following setup is recommended to install this repository on your machine:

**Operating System**: Mac, Linux or Windows.

**Code editor**: [Visual Studio Code](https://code.visualstudio.com/).

**Command line tools**:

- [git](https://git-scm.com/) version 2.26.0 or above
- [node](https://nodejs.org/en/) version 14.9.0 or above

If setup is done, run the following commands:

```console
git clone git@github.com:jsenv/jsenv-template-node-package.git
```

```console
cd ./jsenv-template-node-package
```

```console
npm install
```

Now you can open VSCode to start coding

```console
code .
```

# Start coding

Create a branch using git command

```console
git checkout -b branch-name
```

Then you can open a file and modify its content. The first thing that should happen then is linting and formatting.

# Linting

The codebase uses [ESLint](https://eslint.org) to lint files. It is recommended to install and use [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to have **ESLint integrated in VSCode**.

The ESLint configuration can be found in [.eslintrc.cjs](./.eslintrc.cjs). The ESLint configuration consider all files as written for Node.js. The rest of the configuration comes from [@jsenv/eslint-config](https://github.com/jsenv/jsenv-eslint-config#eslint-config).

If ESLint rules are not respected, the main **GitHub workflow will fail** during [code quality step](./.github/workflows/main.yml#L45).

You can also run a command to check all your file against ESLint rules:

```console
npm run eslint-check
```

# Formatting

The codebase uses [prettier](https://prettier.io) to ensure a coherent and pretty code formatting. Formatting takes time and is more consistent when done by a tool, here prettier. Install [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and **let the extension do the formatting** when you save a file.

The prettier configuration can be found in [.prettierrc.yml](./.prettierrc.yml).

If prettier configuration is not respected, the main **GitHub workflow will log** which files are incorrect during [code format step](./.github/workflows/ci.yml#L33).

</details>

# Debugging

You can debug a file using [VSCode integrated debugger for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-debugging). This repository contains a pre-defined launch configuration for VSCode at [.vscode/launch.json#L2](./.vscode/launch.json#L5). It's a classic node configuration enabling some flags like [--experimental-top-level-await](https://nodejs.org/docs/latest-v14.x/api/cli.html#cli_experimental_repl_await)

![Screencast of debugging a Node.js file in VSCode](./docs/vscode-node-debug.gif)

You can also use any debugging recipe documented in [Node.js debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started)

# Testing

## Writing tests

This part explains how to write a test. You don't have to write a test for every line of code, choose wisely.

Your test file must end with `.test.js` and be inside the [test/](./test/) directory.

Each test is configured to run twice:

- First with the default behaviour of the `node` command
- Secondly with `--conditions=production` parameter

This ensure both the development and production code path are tested.

All this is configured in [script/test/test.js](./script/test/test.js#L7). Read more in [jsenv testing documentation](https://github.com/jsenv/jsenv-core/blob/master/docs/testing/readme.md#test-execution)

## Executing tests

To execute a single test, use directly the `node` command or VSCode debugger as documented in the previous part.

To execute all tests at once, use the following command

```console
npm test
```

# Creating a pull request

See [Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub documentation.

Once the pull request is opened, the GitHub workflow [main.yml](./.github/workflows/main.yml) will run to check several things.

- ESLint

- Prettier

- Unit test

- Code coverage

For informational purposes, a bot is posting a code coverage comment in the pull request.

![Screenshot of codecov pull request comment](./docs/codecov-comment.png)

# Publish on npm

TODO: explain the commonjs build and how to remove it if not needed

In order to generate files that will be published on npm use `npm run dist`. This will generate files into [dist/](./dist/) directory.

The files will be generated in `commonjs` to allow consumer of the package to use `require` on it. It means [main.js](./main.js) written using standard ES module format is converted into CommonJS module format and written at [dist/commonjs/main.cjs](./dist/commonjs/main.cjs).

Read more in [jsenv building documentation](https://github.com/jsenv/jsenv-core/blob/master/docs/building/readme.md#Building-a-nodejs-package).å

TODO: explain the github workflow (it's auto publishing on npm)
