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

  // Files in this repository are all meant to be executed in Node.js
  // and we want to tell this to ESLint.
  // As a result ESLint can consider `window` as undefined and `global`
  // as an existing global variable.
  // To do that we pass browser: false, node:true
  browser: false,
  node: true,

  // prettier param tells we are using prettier. It will disable all eslint rules
  // already handled by prettier.
  prettier: true,
})

// Example of code changing the ESLint configuration to enable a rule:
// config.rules['prefer-const'] = ['error']

module.exports = config
