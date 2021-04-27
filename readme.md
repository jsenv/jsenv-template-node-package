> The documentation below is part of the [GitHub repository template](https://docs.github.com/en/github-ae@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template). Check [how to use](./docs/how-to-use.md) to read documentation about the template itself.

# Node package title

Node package description.

[![npm package](https://img.shields.io/npm/v/@jsenv/template-node-package.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/template-node-package)
[![github main](https://github.com/jsenv/jsenv-template-node-package/workflows/main/badge.svg)](https://github.com/jsenv/jsenv-template-node-package/actions?workflow=main)
[![codecov coverage](https://codecov.io/gh/jsenv/jsenv-template-node-package/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/jsenv-template-node-package)

# Table of contents

- [Template introduction](#Template-introduction)
- [Presentation](#Presentation)
- [Installation](#Installation)
- [Example](#Example)
- [API](#API)
- [Production mode](#production-mode)

# Presentation

```js
import { getMessage } from "@jsenv/template-node-package"

console.log(getMessage())
```

Code above logs `"Hello prod!"`.

# Installation

```console
npm install @jsenv/template-node-package
```

# Example

<details>
  <summary>Create <code>example.js</code></summary>

```js
import { getMessage } from "@jsenv/template-node-package"

console.log(getMessage())
```

The package also provides files written in commonjs. It means you can also `require` it as shown below.

```js
const { getMessage } = require("@jsenv/template-node-package")

console.log(getMessage())
```

</details>

<details>
  <summary>Execute with node</summary>

`example.js` can be executed with the `node` command.

```console
node ./example.js
```

It would log `Hello dev!` in the terminal as shown in the screenshot below.

![screenshot of terminal after execution with node](./TODO.png)

</details>

</details>

# API

## getMessage

`getMessage` is a function returning a string. The returned string is different depending in [production mode](#production-mode)

<details>
  <summary>getMessage code example</summary>

```js
import { getMessage } from "@jsenv/template-node-package"

const message = getMessage()
message // "Hello dev!"
```

</details>

## getMessageAsync

`getMessageAsync` is like [getMessage](#getMessage) except it's an async function.

<details>
  <summary>getMessageAsync code example</summary>

```js
import { getMessageAsync } from "@jsenv/template-node-package"

const message = await getMessageAsync()
message // "Hello dev!"
```

</details>

# Production mode

This package have two mode: `development` and `production`. By default this package is in `development` mode.

`production` mode can be enabled using [--conditions=production](https://nodejs.org/docs/latest-v15.x/api/packages.html#packages_resolving_user_conditions) when executing the code with the node command.
In `production` mode [getMessage](#getmessage) and [getMessageAsync](#getMessageAsync) return a different string: `"Hello prod!"`

> The effect of `production` mode is trivial because it's a dumb package. With a real package, `development` and `production` would have more important differences.
