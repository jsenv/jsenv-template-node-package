# CommonJS compatibility

The codebase is written in esm and meant to used as such with the `import` keyword:

```js
import { getMessage } from "@jsenv/template-node-package"
```

CommonJS compatibility consists into having a second version of your files generated in commonJS. This allows a user of the package to also be able to use `require`:

```js
const { getMessage } = require("@jsenv/template-node-package")
```

To keep this ability check [How to use CommonJS compatibility](#how-to-use-commonJS-compatibility). Otherwise see [How to remove CommonJS compatibility](#how-to-remove-commonJS-compatibility).

# How to use CommonJS compatibility

When `npm publish` is runned, commonJS files are generated. This is because there is a `"prepublishOnly"` script in [package.json](../../package.json#L60) configured to run `npm run dist`.

The `npm run dist` command executes [script/build/build.js](../../script/build/build.js) which creates a commonJS build of the source files and write them into [dist/](../../dist/).

When the package is used by `import` or `require`, Node.js knows which file to choose thanks to the `"exports"` field in our [package.json](../../package.json#L24).

List of commands related to the build:

<details>
   <summary>npm run build-dev</summary>

Write commonjs files into `dist/dev/`.

</details>

<details>
   <summary>npm run build-prod</summary>

Write commonjs files into `dist/prod/`.

These files are generated to make commonjs build compatible with [production mode](../production_mode/production_mode.md).

</details>

<details>
   <summary>npm run dist</summary>

Generates both `dist/dev/` and `dist/prod/`

</details>

See also

- Node.js documentation on [dual module packages](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_approach_2_isolate_state)

# How to remove CommonJS compatibility

Follow these steps to remove the CommonJS compatibility from this repository.

1. Remove `&& npm run dist` from `"prepublishOnly"` in [package.json](../../package.json#L60)
2. Remove `"dist"`, `"build-dev"`, `"build-prod"` from `"scripts"` in [package.json](../../package.json#L47)
3. Delete [script/build/](../../script/build/) directory
4. Simplify `"."` from `"exports"` in [package.json](../../package.json#L24)

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

5. Remove `"main"` from [package.json](../../package.json#L39)

6. Remove `"/dist/"` from `"files"` in [package.json](../../package.json#L40)

7. Remove `/dist/` in [.eslintignore](../../.eslintignore#L17)

8. Remove `/dist/` in [.prettierignore](../../.prettierignore#L12)
