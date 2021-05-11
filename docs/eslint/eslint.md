# ESLint

The codebase uses [ESLint](https://eslint.org) to lint files.

If ESLint rules are not respected, the main **GitHub workflow will fail** during [check lint step](../../.github/workflows/main.yml#L45).

If you want to keep ESLint, check [How to use ESLint](#How-to-use-eslint). Otherwise see [How to remove ESLint](#How-to-remove-eslint).

# How to use ESLint

The ESLint configuration can be found in [.eslintrc.cjs](../../.eslintrc.cjs).

It is recommended to install and use [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to have **ESLint integrated in VSCode**.

List of commands related to ESLint:

<details>
  <summary>npm run eslint-check</summary>

Execute ESLint command on all files.

![stuff](./eslint-check-terminal.png)

</details>

# How to remove ESLint

If you want to remove ESLint from this repository, follow the steps below.

1. Remove `check lint` step in [.github/workflows/main.yml](../../.github/workflows/main.yml#L43)
2. Remove `"eslint-check"` from `"scripts"` in [package.json](../../package.json#L44)
3. Delete [.eslintrc.cjs](../../.eslintrc.cjs)
4. Delete [.eslintignore](../../.eslintignore)
5. Remove `"@jsenv/eslint-config"` from `"devDependencies"` in [package.json](../../package.json#L66)
6. Remove `"@jsenv/importmap-eslint-resolver"` from `"devDependencies"` in [package.json](../../package.json#L68)
7. Remove `"eslint-plugin-import"` from `"devDependencies"` in [package.json](../../package.json#L73)
8. Remove `"eslint"` from `"devDependencies"` in [package.json](../../package.json#L72)
