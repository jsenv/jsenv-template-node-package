# How to use tests

It's not strictly necessary to run tests locally while developing: You can always open a pull request and rely on the GitHub workflow to run tests for you, but sometimes it's helpful to run tests locally before pushing your changes.

There is 2 commands for tests

<details>
  <summary>npm test</summary>

Run all tests

![stuff](./docs/test-terminal.png)

</details>

<details>
  <summary>npm run test-with-coverage</summary>

Run all tests and collect associated code coverage, then write coverage report into coverage/index.html and also log coverage into the terminal.

![stuff](./docs/test-with-coverage-terminal.png)

# How to remove tests

If you don't need test or want to use an other test framework/library follow the steps below.

1. Remove `check tests` step in [.github/workflows/main.yml](../../.github/workflows/main.yml#L45)
2. Remove `"test"` from `"scripts"` in [package.json](../../package.json#L44)
3. Remove `"test-with-coverage"` from `"scripts"` in [package.json](../../package.json#L47)
4. Remove [script/test/](../../script/test/) directory
5. Remove `"@jsenv/assert"` from `"devDependencies"` [package.json](../../package.json#L60)
