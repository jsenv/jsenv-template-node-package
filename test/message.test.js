import { assert } from "@jsenv/assert"
import { getMessage, getMessageAsync } from "@jsenv/template-node-package"

const isProduction = process.execArgv.some((arg) => arg.includes("--conditions=production"))
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
