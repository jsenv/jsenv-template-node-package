<!-- https://github.com/github/docs/blob/main/tests/README.md -->

# How to use tests

All test files are inside the [test/](./test/) directory and ends with `.test.js`. These files are executed two times. A first time with in a regular node process, a second time with `--conditions=production` parameter. This ensure both the development and production code path are tested. Read more about production code path in [Production mode](../production/production.md).

If one or more test execution is failing, the main **GitHub workflow will fail** during [check tests](../../.github/workflows/main.yml#L47) step.

The test script can be found in [script/test/test.js](../../script/test/test.js).

## Executing all tests

<details>
  <summary>npm test</summary>

Run all tests

![stuff](./test-terminal.png)

</details>

## Executing a single test

Tests are written using [jsenv](https://github.com/jsenv/jsenv-core). This is a test runner which see test files as regular files so each test file can be executed independently.

<details>
  <summary>node test/message.test.js</summary>

![Screenshot of terminal after test execution with node](./test-node.png)

See [test/message.test.js](../../test/message.test.js)

</details>

And debugged independently using [VSCode debugger for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) or any debugging recipe documented in [Node.js debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started).

<details>
  <summary>See test file debugging in VSCode</summary>

![Screencast of debugging a test file in VSCode](./test-debug-vscode.gif)

</details>

## Test coverage

Explain coverage, talk about codecov integration.
Explain the need for CODECOV_TOKEN

<details>
  <summary>npm run test-with-coverage</summary>

Run all tests and collect associated code coverage, then write coverage report into coverage/index.html and also log coverage into the terminal.

![stuff](./test-with-coverage-terminal.png)

</details>

# TO PUT SOMEWHERE

It's not strictly necessary to run tests locally while developing: You can always open a pull request and rely on the GitHub workflow to run tests for you, but sometimes it's helpful to run tests locally before pushing your changes.

# How to remove tests

If you don't need test or want to use an other test framework/library follow the steps below.

1. Remove `check tests` step in [.github/workflows/main.yml](../../.github/workflows/main.yml#L45)
2. Remove `"test"` from `"scripts"` in [package.json](../../package.json#L44)
3. Remove `"test-with-coverage"` from `"scripts"` in [package.json](../../package.json#L47)
4. Remove [script/test/](../../script/test/) directory
5. Remove `"@jsenv/assert"` from `"devDependencies"` [package.json](../../package.json#L60)