# How to use build

This package got a build in order to be compatible with CommonJS. This allow package to be _required_ as in the code below.

```js
const { getMessage } = require("@jsenv/template-node-package")
```

This is possible thanks to the `"exports"` field in [package.json](../../package.json#L20) as explained in [Node.js documentation](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_approach_2_isolate_state).

## CommonJS build

Before publising the package on npm, a script is writing files into [dist/commonjs/](../../dist/commonjs/). The script is doing the following:

1. read source files (written using ES modules)
2. convert source code into CommonJS
3. write resulting files into [dist/commonjs/](../../dist/commonjs/)

This script is configured in [script/generate-commonjs-build/generate-commonjs-build.js](../../script/generate-commonjs-build/generate-commonjs-build.js).

To make commonjs files also compatible with [production mode](../production/production.md), two files are generated: [dist/commonjs/template-node-package.dev.cjs](../../dist/commonjs/template-node-package.dev.cjs) and [dist/commonjs/template-node-package.prod.cjs](../../dist/commonjs/template-node-package.prod.cjs).

The commonjs build is called by npm thanks to `"prepublishOnly"` script in [package.json](../../package.json#L53)

# How to remove build

Follow these steps to remove the CommonJS build from this repository.

1. Remove `&& npm run dist` from `"prepublishOnly"` in [package.json](../../package.json#L53)
2. Remove `"dist"` from `"scripts"` in [package.json](../../package.json#L33)
3. Remove `"generate-commonjs-build"` from `"scripts"` in [package.json](../../package.json#L46)
4. Remove [script/generate-commonjs-build/](../../script/generate-commonjs-build/)
5. Simplify `"."` from `"exports"` in [package.json](../../package.json#L18)

   ```diff
   - ".": {
   -   "import": "./main.js",
   -   "require": {
   -     "production": "./dist/commonjs/template-node-package.prod.cjs",
   -     "default": "./dist/commonjs/template-node-package.dev.cjs"
   -   }
   - },
   + ".": "./main.js",
   ```

6. Update `"main"` in [package.json](../../package.json#L35)

   ```diff
   - "main": "dist/commonjs/main.cjs",
   + "main": "main.js",
   ```

7. Remove `"module"` in [package.json](../../package.json#L34)

8. Remove `"/dist/"` from `"files"` in [package.json](../../package.json#L37)

9. Remove `/dist/` in [.eslintignore](../../.eslintignore#L17)

10. Remove `/dist/` in [.prettierignore](../../.prettierignore#L17)
