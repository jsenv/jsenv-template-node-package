/**
 *
 * This file is executed by `npm run upload-coverage` which is runned by
 * the main GitHub workflow (.github/workflows/main.yml).
 *
 */

import { uploadCoverage } from "@jsenv/codecov-upload"
import * as jsenvConfig from "../../jsenv.config.js"

uploadCoverage({
  ...jsenvConfig,
})
