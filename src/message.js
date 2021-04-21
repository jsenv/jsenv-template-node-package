import { dev } from "#env"

const message = dev ? "Hello dev!" : "Hello prod!"

export const getMessage = () => {
  return message
}

export const getMessageAsync = async () => {
  return message
}
