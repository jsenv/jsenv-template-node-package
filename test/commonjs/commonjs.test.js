import { assert } from "@jsenv/assert"
import { executeChildProcess } from "./commonjs.util.js"

{
  const { stdout } = await executeChildProcess(new URL("./commonjs.client.cjs", import.meta.url))
  const actual = JSON.parse(stdout)
  const expected = {
    message: "Hello prod!",
    messageAsync: "Hello prod!",
  }
  assert({ actual, expected })
}

{
  const { stdout } = await executeChildProcess(new URL("./commonjs.client.cjs", import.meta.url), {
    dev: true,
  })
  const actual = JSON.parse(stdout)
  const expected = {
    message: "Hello dev!",
    messageAsync: "Hello dev!",
  }
  assert({ actual, expected })
}
