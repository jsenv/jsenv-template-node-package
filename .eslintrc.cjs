/**
 * Eslint does not support esmodule in the config file. For that reason
 * this file ends with the .cjs extension.
 *
 * This file uses eslint config from "@jsenv/eslint-config"
 * And configure some params.
 */

const { createEslintConfig } = require("@jsenv/eslint-config")

const config = createEslintConfig({
  projectDirectoryUrl: __dirname,

  // Tell ESLint to use the importmap to resolve imports.
  // Read more in https://github.com/jsenv/jsenv-node-module-import-map#Configure-vscode-and-eslint-for-importmap
  importResolutionMethod: "import-map",
  importMapFileRelativeUrl: "./importmap.dev.importmap",

  // "node" and "browser" params tells ESLint where our files will be executed.
  // ESLint will configure the available global variables according to this param.
  // Here it means ESLint could report an error like "window" is not defined
  // but not "global" is not defined.
  browser: false,
  node: true,

  // prettier param tells we are using prettier. It will disable all eslint rules
  // already handled by prettier.
  prettier: true,
})

module.exports = config
