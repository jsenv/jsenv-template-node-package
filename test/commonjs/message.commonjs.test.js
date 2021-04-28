import { assert } from "@jsenv/assert"
import { getProcessArgument, executeChildProcess } from "../test.util.js"

const isProduction = (getProcessArgument("--conditions") || "").includes("production")
const messageExpected = isProduction ? "Hello prod!" : "Hello dev!"

// ensure commonjs build files can be required and work as well
{
  const { stdout } = await executeChildProcess(new URL("./commonjs.client.cjs", import.meta.url))
  const actual = JSON.parse(stdout)
  const expected = {
    message: messageExpected,
    messageAsync: messageExpected,
  }
  assert({ actual, expected })
}

console.log("passed")
