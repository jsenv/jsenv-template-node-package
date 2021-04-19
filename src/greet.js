import { dev } from "#env"
import { message } from "./internal/message.js"

export const greet = () => {
  if (dev) {
    console.info(`greet called`)
  }
  return message
}
