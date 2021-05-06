// documentation: https://github.com/jsenv/jsenv-core/blob/master/docs/building/readme.md#Building-a-nodejs-package

import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

const isProduction = process.execArgv.some((arg) => arg.includes("--conditions=production"))

await buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: isProduction ? "./dist/prod/" : "./dist/dev/",
  format: "commonjs",
  entryPointMap: {
    "./main.js": isProduction
      ? "./template-node-package.prod.cjs"
      : "./template-node-package.dev.cjs",
  },
  babelPluginMap: getBabelPluginMapForNode(),
  buildDirectoryClean: true,
})
