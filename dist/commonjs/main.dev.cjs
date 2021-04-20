'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const message = "Hello world";

const greet = () => {
  {
    console.info(`greet called`);
  }

  return message;
};

const greetAsync = async () => {
  return message;
};

exports.greet = greet;
exports.greetAsync = greetAsync;

//# sourceMappingURL=main.dev.cjs.map