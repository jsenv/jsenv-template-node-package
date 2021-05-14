# ESM resolution

This codebase relies on [node esm resolution algorithm](https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#esm_resolution_algorithm).

Currently no ESLint plugin and no VSCode extension is implementing this algorithm entirely.

It is mandatory to help ESLint with import resolution as it is configured to complain in case an import cannot be resolved.

It is very valuable to help VSCode with import resolution so that `cmd+click` on a variable open the file where it is declared. It also improves VSCode autocompletion as it becomes capable to suggest the variables found in the imported file.

If you want to keep that check [How to keep ESM resolution in ESLint and VSCode](#How-to-keep-ESM-resolution-in-ESLint-and-VSCode). Otherwise see [How to remove ESM resolution from ESLint and VSCode](#How-to-remove-ESM-resolution-from-ESLint-and-VSCode).

# How to keep ESM resolution in ESLint and VSCode

An importmap file is part of this codebase to make ESLint and VSCode capable to resolve imports.

The importmap file is used by ESLint to resolve imports like Node.js. This is configured by `importMapFileRelativeUrl` in [.eslintrc.cjs](../../.eslintrc.cjs#48).

The importmap file can be generated using `npm run generate-import-map` command which executes [script/generate-import-map/generate-import-map.js](../../script/generate-import-map/generate-import-map.js).

Generating the importmap also create or updates `"paths"` in a _jsconfig.json_ file. This file is used by VSCode to resolve imports and makes it capable to resolve them like Node.js.

You should execute `npm run generate-import-map` everytime you update your `package.json` to keep them in sync.

When `npm install` is executed the importmap will be generated. This is because there is a `"postinstall"` script in [package.json](../../package.json#L58). This _postinstall_ script is not meant to be executed by the users of the package, only by the developpers. For this reason, _postinstall_ script is removed from _package.json_ before publishing on npm by `"prepublishOnly"` script and restored by `"postpublish"`.

# How to remove ESM resolution from ESLint and VSCode

**Warning**: ESLint and VSCode need this to properly resolve imports as [explained above](#import-map)

If you want to remove importmap from this repository, follow the steps below.

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

5. Remove `"@jsenv/importmap-eslint-resolver"` from `"devDependencies"` in [package.json](../../package.json#L68)
6. Remove `/importmap.dev.importmap` in [.gitignore](../../.gitignore#L23)
7. Delete `./importmap.dev.importmap` file
8. Remove `"paths"` from `./jsconfig.json` file
