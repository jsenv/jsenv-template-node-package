/*
This file is executed by message.commonjs.test.js.

It exists to ensure commonjs build can be required, no need to duplicate testing
in there.

*/

import { createRequire } from "module"

const require = createRequire(import.meta.url)

require("@jsenv/template-node-package")

console.log("passed")