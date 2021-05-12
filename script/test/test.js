import { executeTestPlan, launchNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.js"

executeTestPlan({
  ...jsenvConfig,
  testPlan: {
    "test/**/*.test.js": {
      "node": {
        launch: launchNode,
      },
      "node-prod": {
        launch: launchNode,
        launchParams: {
          commandLineOptions: ["--conditions=production"],
        },
      },
    },
  },
})
