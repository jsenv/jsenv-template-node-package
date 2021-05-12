import { DEV } from "#env"

const message = DEV ? "Hello dev!" : "Hello prod!"

export const getMessage = () => {
  return message
}

export const getMessageAsync = async () => {
  return message
}
