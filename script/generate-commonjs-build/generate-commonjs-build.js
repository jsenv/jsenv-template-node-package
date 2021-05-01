// documentation: https://github.com/jsenv/jsenv-core/blob/master/docs/building/readme.md#Building-a-nodejs-package

import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

const build = async ({ dev = false }) => {
  return buildProject({
    ...jsenvConfig,
    importMapFileRelativeUrl: dev ? "./importmap.dev.importmap" : "./importmap.prod.importmap",
    format: "commonjs",
    entryPointMap: {
      "./main.js": dev ? "./template-node-package.dev.cjs" : "./template-node-package.prod.cjs",
    },
    babelPluginMap: getBabelPluginMapForNode(),
    buildDirectoryClean: !dev,
  })
}

await build({ dev: false })
await build({ dev: true })
