import { jsenvBabelPluginMap, getBabelPluginMapForNode } from "@jsenv/core"

export const projectDirectoryUrl = String(new URL("./", import.meta.url))

export const babelPluginMap = getBabelPluginMapForNode({
  ...jsenvBabelPluginMap,
  // add more babel plugin here if needed
})

export const importMapFileRelativeUrl = "./importmap.dev.importmap"
