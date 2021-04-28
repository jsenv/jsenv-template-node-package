import { assert } from "@jsenv/assert"
import { getMessage, getMessageAsync } from "@jsenv/template-node-package"
import { getProcessArgument } from "./test.util.js"

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

console.log("passed")
