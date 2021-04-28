# How to use production mode

The code of this npm package behaves differently when executed with `--conditions=production`.

If you look into `"imports"` in [package.json](../../package.json#L28) you will see that `#env` can either resolve to [env.dev.js](../../env.dev.js) or [env.prod.js](../../env.prod.js). The ability to remap an import specifier comes from Node.js and is documented in [package conditions](https://nodejs.org/docs/latest-v15.x/api/packages.html#packages_resolving_user_conditions).

This feature is designed for two purposes:

- Write code specific to development (verbose logs, extensive check to help developer, etc)

  ```js
  import { dev } from "#env"

  export const doSomething = ({ param }) => {
    if (dev && typeof param !== "undefined") {
      // log specific to dev
      console.warn(`doSomething was called with param, you should not do this because blah blah...`)
      return
    }
    // do stuff
  }
  ```

- Regroup value specific to production in [env.prod.js](../../env.prod.js)

  ```js
  import { backendUrl } from "#env"

  export const logBackendUrl = () => console.log(backendUrl)
  ```

Production must be explicitely enabled using `--conditions=production` to avoid accidentaly trigger code supposed to execute in production during development.

# Test production code

Execute/Debug a single test file in production mode using the VSCode launch configuration named `node (prod)` declared in [launch.json](../../launch.json#L26).

When all test files are executed by `npm test`, they are executed a second time with `--conditions=production`. This is configured using `commandLineOptions` in [script/test/test.js](../../script/test/test.js#L16).

# How to remove production mode

If you don't need the production mode you can remove it following the steps below.

1. Remove all `#env` imports
2. Remove [env.prod.js](../../env.prod.js) and [env.dev.js](../../env.dev.js)
3. Remove `"node-prod"` from `testPlan` in [script/test/test.js](../../script/test/test.js#L11)
4. Remove `"#env"` from `"imports"` in [package.json](../../package.json#L29)
5. Remove the launch configuration named `"node (prod)"` in [launch.json](../../.vscode/launch.json#L26)
