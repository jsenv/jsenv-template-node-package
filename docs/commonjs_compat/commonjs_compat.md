# Build

This package got a build in order to be compatible with CommonJS. This allow package to be _required_ as in the code below.

```js
const { getMessage } = require("@jsenv/template-node-package")
```

This is possible thanks to the `"exports"` field in [package.json](../../package.json#L20) as explained in [Node.js documentation](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_approach_2_isolate_state).

If you want to keep the commonjs build, check [How to use build](#how-to-use-build). Otherwise see [How to remove build](#how-to-remove-build).

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

These files are generated to make commonjs build compatible with [production mode](../production_mode/production_mode.md) there is a production build.

</details>

<details>
   <summary>npm run dist</summary>

Generates both `dist/dev/` and `dist/prod/`

</details>

# How to remove build

Follow these steps to remove the CommonJS build from this repository.

1. Remove `&& npm run dist` from `"prepublishOnly"` in [package.json](../../package.json#L56)
2. Remove the following scripts in [package.json](../../package.json#L33): `"dist"`, `"build-dev"`, `"build-prod"`
3. Delete [script/build/](../../script/build/) directory
4. Simplify `"."` from `"exports"` in [package.json](../../package.json#L18)

   ```diff
   - ".": {
   -   "import": "./main.js",
   -   "require": {
   -     "production": "./dist/prod/template_node_package.prod.cjs",
   -     "default": "./dist/dev/template_node_package.dev.cjs"
   -   }
   - },
   + ".": "./main.js",
   ```

5. Update `"main"` in [package.json](../../package.json#L35)

   ```diff
   - "main": "dist/dev/template_node_package.dev.cjs",
   + "main": "main.js",
   ```

6. Remove `"module": "main.js"` in [package.json](../../package.json#L34)

7. Remove `"/dist/"` from `"files"` in [package.json](../../package.json#L37)

8. Remove `/dist/` in [.eslintignore](../../.eslintignore#L17)

9. Remove `/dist/` in [.prettierignore](../../.prettierignore#L12)
