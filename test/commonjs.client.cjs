const { getMessage, getMessageAsync } = require("@jsenv/template-node-package")

getMessageAsync().then((messageAsync) => {
  console.log(
    JSON.stringify({
      message: getMessage(),
      messageAsync,
    }),
  )
})
