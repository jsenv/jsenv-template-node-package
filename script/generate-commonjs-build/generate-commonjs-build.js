import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

buildProject({
  ...jsenvConfig,
  format: "commonjs",
  entryPointMap: {
    "./main.js": "./main.cjs",
  },
  babelPluginMap: getBabelPluginMapForNode(),
  buildDirectoryClean: true,
})
