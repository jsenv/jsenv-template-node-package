import { fork } from "child_process"
import { fileURLToPath } from "url"

export const executeChildProcess = (fileUrl, { dev }) => {
  const executionPromise = new Promise((resolve, reject) => {
    const childProcess = fork(fileURLToPath(fileUrl), {
      execArgv: [...(dev ? ["--conditions=development"] : [])],
      stdio: "pipe",
    })
    const stdout = []
    childProcess.stdout.on("data", (data) => {
      stdout.push(data)
    })
    const stderr = []
    childProcess.stderr.on("data", (data) => {
      stderr.push(data)
    })
    childProcess.on("close", () => {
      if (childProcess.exitCode) {
        reject(childProcess.exitCode)
      } else {
        resolve({
          stdout: stdout.join(""),
          stderr: stderr.join(""),
        })
      }
    })
  })
  return executionPromise
}
