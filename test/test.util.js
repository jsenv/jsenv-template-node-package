import { fork } from "child_process"
import { fileURLToPath } from "url"

export const executeChildProcess = (fileUrl) => {
  const executionPromise = new Promise((resolve, reject) => {
    const childProcess = fork(fileURLToPath(fileUrl), {
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

export const getProcessArgument = (argumentName) => {
  let i = 0

  const argArray = process.execArgv

  while (i < argArray.length) {
    const argCandidate = argArray[i]

    if (argCandidate === argumentName) {
      return ""
    }

    if (argCandidate.startsWith(`${argumentName}=`)) {
      return argCandidate.slice(`${argumentName}=`.length)
    }

    i++
  }

  return null
}
