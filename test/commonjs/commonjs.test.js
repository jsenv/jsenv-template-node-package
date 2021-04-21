import { assert } from "@jsenv/assert"
import { executeChildProcess } from "./commonjs.util.js"

{
  const { stdout } = await executeChildProcess(new URL("./commonjs-client.cjs", import.meta.url), {
    dev: true,
  })
  const actual = stdout
  const expected = stdout
  assert({ actual, expected })
}
