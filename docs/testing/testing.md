<!-- https://github.com/github/docs/blob/main/tests/README.md -->

# Tests

All test files are inside the [test/](./test/) directory and ends with `.test.js`.

If one or more test is failing, the main GitHub **workflow will fail** during [check tests](../../.github/workflows/main.yml#L47) step.

Code coverage from test files is monitored, this is documented in [docs/coverage/coverage.md](../coverage/coverage.md).

If you want to keep test files check [How to use tests](#How-to-use-tests). Otherwise see [How to remove tests](#How-to-remove-tests)

# How to use tests

Test files are written using jsenv philosophy: **Test file can be executed with the `node` command**.

```console
> node ./test/message.test.js
passed
```

See [test/message.test.js](../../test/message.test.js)

Test file are also testing the production mode, they can be tested using `--conditions=production`

```console
> node --conditions=production ./test/message.test.js
passed
```

## Debug a test

It is recommanded to use VSCode integrated debugger for Node.js documented [here](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

<details>
  <summary>See test file debugging in VSCode</summary>

![Screencast of debugging a test file in VSCode](./test-debug-vscode.gif)

</details>

Any debugging recipe documented in [Node.js debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started) works too.

## Executing all tests

All tests can be executed at once using `npm test`. This script is configured to execute [script/test/test.js](../../script/test/test.js).

Test files are executed twice, the second execution ensure code specific to _production_ is also tested.

![stuff](./test-terminal.png)

# How to remove tests

If you don't need test or want to use an other test framework/library follow the steps below.

1. Remove `check tests` step in [.github/workflows/main.yml](../../.github/workflows/main.yml#L45)
2. Remove `"test"` from `"scripts"` in [package.json](../../package.json#L44)
3. Remove `"test-with-coverage"` from `"scripts"` in [package.json](../../package.json#L47)
4. Delete [script/test/](../../script/test/) directory
5. Remove `"@jsenv/assert"` from `"devDependencies"` [package.json](../../package.json#L60)
