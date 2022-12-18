import { stdin, stdout, chdir, cwd } from "node:process";

import commands from "./commands/index.mjs";

import { sayGoodbye, sayHello } from "./greeting.mjs";
import { OS_USER_DIR } from "./constants.mjs";

const init = () => {
  sayHello();

  chdir(OS_USER_DIR);
  stdout.write(`You are currently in ${cwd()}\n`);

  stdin.on("data", (chunk) => {
    const command = chunk.toString().trim();

    commands[command]();
    stdout.write(`You are currently in ${cwd()}\n`);
  });

  process.on("SIGINT", () => {
    sayGoodbye();
  });
};

init();
