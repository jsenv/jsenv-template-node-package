import { assert } from "@jsenv/assert"
import { getMessage, getMessageAsync } from "@jsenv/template-node-package"
import { getProcessArgument, executeChildProcess } from "./test.util.js"

const isProduction = (getProcessArgument("--conditions") || "").includes("production")
const messageExpected = isProduction ? "Hello prod!" : "Hello dev!"

{
  const actual = getMessage()
  const expected = messageExpected
  assert({ actual, expected })
}

{
  const actual = await getMessageAsync()
  const expected = messageExpected
  assert({ actual, expected })
}

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
