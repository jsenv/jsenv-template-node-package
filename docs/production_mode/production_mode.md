# Production mode

Production mode is the ability to make code behave differently depending if it's executed normally or in production mode.

It can be used to do things only during development (or production).

```js
import { DEV } from "#env"

if (DEV) {
  console.log("This log is displayed only during dev")
}
```

Or to use a different value when production mode is enabled.

```js
import { DATABASE_URL } from "#env"

console.log(`The database url is ${DATABASE_URL}`)
```

This repository has preconfigured a production mode, if you want to keep this ability, check [How to use production mode](#how-to-use-production-mode). Otherwise see [How to remove production mode](#how-to-remove-production-mode).

# How to use production mode

The production mode is implemented using a node feature called [package conditions](https://nodejs.org/docs/latest-v15.x/api/packages.html#packages_resolving_user_conditions).

Let's see an example with the `index.js` file below.

```js
import { DEV } from "#env"

console.log(DEV ? "development" : "production")
```

Here is what happens when `index.js` is executed normally and with `--conditions=production`.

```console
> node index.js
development
```

```console
> node --conditions=production index.js
production
```

What happens is that Node.js remap `#env` to [env.dev.js](../../env.dev.js) by default and to [env.prod.js](../../env.prod.js) when `--conditions=production` is passed.

This is configured by `"imports"` field in our [package.json](../../package.json#L28).

# How to remove production mode

If you don't need the production mode you can remove it following the steps below.

1. Remove all `#env` imports in files
2. Delete [env.prod.js](../../env.prod.js)
3. Delete [env.dev.js](../../env.dev.js)
4. Remove `"node-prod"` from `testPlan` in [script/test/test.js](../../script/test/test.js#L11)
5. Remove `"#env"` from `"imports"` in [package.json](../../package.json#L29)
6. Remove the launch configuration named `"node (prod)"` in [.vscode/launch.json](../../.vscode/launch.json#L26)
