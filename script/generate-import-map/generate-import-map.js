import { getImportMapFromProjectFiles, writeImportMapFile } from "@jsenv/node-module-import-map"
import { projectDirectoryUrl } from "../../jsenv.config.js"

const generateFile = async (importMapFileRelativeUrl, { dev, ...rest } = {}) => {
  await writeImportMapFile(
    [
      getImportMapFromProjectFiles({
        projectDirectoryUrl,
        runtime: "node",
        dev,
        ...rest,
      }),
    ],
    {
      projectDirectoryUrl,
      importMapFileRelativeUrl,
      jsConfigFile: dev,
    },
  )
}

generateFile("importmap.prod.importmap", {
  dev: false,
})
generateFile("importmap.dev.importmap", {
  dev: true,
})
generateFile("importmap.prod.test.importmap", {
  // we need dev dependencies for tests
  // and avoid parsing js files are tests would not be found
  // also we want to favor "production" over "development" in package exports
  projectPackageDevDependenciesIncluded: true,
  jsFiles: false,
  packageConditionDevelopment: false,
})
