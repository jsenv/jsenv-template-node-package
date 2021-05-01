import { requireUsingChildProcess } from "@jsenv/core"

await requireUsingChildProcess(String(new URL("./commonjs.client.cjs", import.meta.url)))
