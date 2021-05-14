# import resolution

This codebase relies on native [node esm resolution algorithm](https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#esm_resolution_algorithm).

This is the native Node.js import resolution algorithm for ESM. There is two important things to see regarding this algorithm:

- _self referencing_
- How ESLint and VSCode will resolve imports.

## Self referencing

Amongst other things _node esm resolution algorithm_ allows something called _self referencing_ in your import paths. This is very useful to have consistent import paths and is easier to read than many `../../`.

```js
import { something } from "../../file.js"
// can be written
import { something } from "package-name/src/internal/file.js"
```

_self referencing_ is enabled by `"./*": "./*"` inside `"exports"` in our [package.json](../../package.json#L30). Read more on Node.js [documentation about self referencing](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_self_referencing_a_package_using_its_name).

## ESLint and VSCode import resolution

At the time of writing this documentation, there is no ESLint plugin and no VSCode extension implementing _node esm resolution algorithm_.

It is mandatory to help ESLint with import resolution otherwise it will consider import as not resolved (or resolve them incorrectly).

It is very valuable to help VSCode with import resolution so that <kbd>cmd</kbd>+`click` on a variable open the file where it is declared. It also improves VSCode autocompletion as it becomes aware of the code inside the imported file.

If you want to keep this, check [How ESLint and VSCode resolve imports](#How-ESLint-and-VSCode-resolve-imports). Otherwise see [How to remove ESM resolution from ESLint and VSCode](#How-to-remove-ESM-resolution-from-ESLint-and-VSCode).

### How ESLint and VSCode resolve imports

Knowing that:

1. ESLint is configured to use an importmap file to resolve import by `importMapFileRelativeUrl` in [.eslintrc.cjs](../../.eslintrc.cjs#48).

2. VSCode can be configured to customize import resolution in a file named _jsconfig.json_.

It is possible to make ESLint and VSCode resolve imports like _node esm resolution algorithm_ by generating the correct importmap and _jsconfig.json_.

This is the responsability of the `npm run generate-import-map` command. This command executes [script/generate-import-map/generate-import-map.js](../../script/generate-import-map/generate-import-map.js) which is generating both the importmap and the _jsconfig.json_.

In order generate importmap a first time, `npm run generate-import-map` is configured to run after `npm install` by the `"postinstall"` script in [package.json](../../package.json#L58). This _postinstall_ script is not meant to be executed by the users of the package, only by the developpers. For this reason, _postinstall_ script is removed from _package.json_ before publishing on npm by `"prepublishOnly"` and restored by `"postpublish"`.

You should rerun `npm run generate-import-map` when something impacting _node esm resolution algorithm_ happens:

Any of the following fields has changed in your _package.json_: `"name"`, `"imports"`, `"exports"`, `"dependencies"`, `"devDependencies"`.

In practice it happens in 3 scenarios:

1. You update manually `"name"`, `"imports"` or `"exports"` field.
2. You install a new dependency with `npm install <package-name>`
3. You uninstall a dependency with `npm uninstall <package-name>`

If you forgot to run `npm run generate-import-map`, some import might not be resolved which leads to the following symptoms:

- `import/no-unresolved` ESLint rule will start failing on these imports.
  ![stuff](./eslint_import_error_vscode.png)

- <kbd>cmd</kbd>+`click` in VSCode won't work anymore on these imports.

### How to remove ESM resolution from ESLint and VSCode

If you want to remove ESM import resolution from the repository, follow the steps below.

1. Remove `"node ./script/transform-package/remove-postinstall.js && "` from `"prepublishOnly"` in [package.json](../../package.json#L59)
2. Remove `"postpublish"`, `"postinstall"` and `"generate-import-map"` from `"scripts"` in [package.json](../../package.json#L46)
3. Delete [script/generate-import-map/](../../script/generate-import-map/) directory
4. Replace `"import/resolver"` in [.eslintrc.cjs](../../.eslintrc.cjs#L43)

   ```diff
   - "@jsenv/importmap-eslint-resolver": {
   -   projectDirectoryUrl: __dirname,
   -   importMapFileRelativeUrl: "./importmap.dev.importmap",
   -   node: true,
   - },
   + "node": {}
   ```

   This step means ESLint will now resolve import using [CommonJS resolution algorithm](https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#modules_all_together) instead of importmap.

5. Remove `"@jsenv/importmap-eslint-resolver"` from `"devDependencies"` in [package.json](../../package.json#L68)
6. Remove `/importmap.dev.importmap` in [.gitignore](../../.gitignore#L23)
7. Delete `./importmap.dev.importmap` file
8. Remove `"paths"` from `./jsconfig.json` file
