# How to use prettier

The prettier configuration can be found in [.prettierrc.yml](../../.prettierrc.yml).

Install [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and **let the extension do the formatting** when you save a file.

If prettier configuration is not respected, the main **GitHub workflow will log** which files are incorrect during [check format step](../../.github/workflows/ci.yml#L33).

There is 3 commands for prettier

<details>
  <summary>npm run prettier-check</summary>

Logs all files matching and not matching prettier format.

![stuff](./prettier-check-terminal.png)

</details>

<details>
  <summary>npm run prettier-format-stage</summary>

Format all files in the [git staging area](https://softwareengineering.stackexchange.com/a/119790)

![stuff](./prettier-format-stage-terminal.png)

</details>

<details>
  <summary>npm run prettier-format</summary>

Format all files in the project.

![stuff](./prettier-format-terminal.png)

</details>

# How to remove prettier

If for some reason you want to remove prettier from this repository, follow the steps below.

1. Remove `check format` step in [.github/workflows/main.yml](../../.github/workflows/main.yml#L45)
2. Remove prettier scripts from `"scripts"` in [package.json](../../package.json#L48)
3. Remove `"prettier"` from `"devDependencies"` in [package.json](../../package.json#L69)
4. Remove `"@jsenv/prettier-check-project"` from `"devDependencies"` in [package.json](../../package.json#L67)
5. Remove [.prettierignore](../../.prettierignore)
6. Remove [.prettierrc.yml](../../.prettierrc.yml)
