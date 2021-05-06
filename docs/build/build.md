# Build

This package got a build in order to be compatible with CommonJS. This allow package to be _required_ as in the code below.

```js
const { getMessage } = require("@jsenv/template-node-package")
```

This is possible thanks to the `"exports"` field in [package.json](../../package.json#L20) as explained in [Node.js documentation](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_approach_2_isolate_state).

# How to use build

There is a `"prepublishOnly"` script in [package.json](../../package.json#L56). This command is called by npm before publishing the package. It creates a commonjs build of the sources files and write them into `dist/`.

This script is configured in [script/build/build.js](../../script/build/build.js).

List of commands related to the build:

<details>
   <summary>npm run build-dev</summary>

Write commonjs files into `dist/dev/`.

</details>

<details>
   <summary>npm run build-prod</summary>

Write commonjs files into `dist/prod/`.

These files are generated to make commonjs build compatible with [production mode](../production/production.md) there is a production build.

</details>

<details>
   <summary>npm run dist</summary>

Generates both `dist/dev/` and `dist/prod/`

</details>

# How to remove build

Follow these steps to remove the CommonJS build from this repository.

1. Remove `&& npm run dist` from `"prepublishOnly"` in [package.json](../../package.json#L56)
2. Remove `"dist"` from `"scripts"` in [package.json](../../package.json#L33)
3. Remove `"build-dev"` from `"scripts"` in [package.json](../../package.json#L48)
4. Remove `"build-prod"` from `"scripts"` in [package.json](../../package.json#L49)
5. Delete [script/build/](../../script/build/) directory
6. Simplify `"."` from `"exports"` in [package.json](../../package.json#L18)

   ```diff
   - ".": {
   -   "import": "./main.js",
   -   "require": {
   -     "production": "./dist/prod/template-node-package.prod.cjs",
   -     "default": "./dist/dev/template-node-package.dev.cjs"
   -   }
   - },
   + ".": "./main.js",
   ```

7. Update `"main"` in [package.json](../../package.json#L35)

   ```diff
   - "main": "dist/dev/template-node-package.dev.cjs",
   + "main": "main.js",
   ```

8. Remove `"module"` in [package.json](../../package.json#L34)

9. Remove `"/dist/"` from `"files"` in [package.json](../../package.json#L37)

10. Remove `/dist/` in [.eslintignore](../../.eslintignore#L17)

11. Remove `/dist/` in [.prettierignore](../../.prettierignore#L12)
