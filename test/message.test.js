import { assert } from "@jsenv/assert"
import { getMessage, getMessageAsync } from "@jsenv/template-node-package"

{
  const actual = getMessage()
  const expected = "Hello dev!"
  assert({ actual, expected })
}

{
  const actual = await getMessageAsync()
  const expected = "Hello dev!"
  assert({ actual, expected })
}
