import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

const build = async ({ dev = false }) => {
  return buildProject({
    ...jsenvConfig,
    importMapFileRelativeUrl: dev ? "./importmap.dev.importmap" : "./importmap.prod.importmap",
    format: "commonjs",
    entryPointMap: {
      "./main.js": dev ? "./main.dev.cjs" : "./main.prod.cjs",
    },
    babelPluginMap: getBabelPluginMapForNode(),
    buildDirectoryClean: !dev,
  })
}

await build({ dev: false })
await build({ dev: true })
