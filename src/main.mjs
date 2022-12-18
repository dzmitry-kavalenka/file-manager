import { stdin, stdout, chdir, cwd } from "node:process";

import commands from "./commands/index.mjs";

import { sayGoodbye, sayHello } from "./greeting.mjs";
import { OS_USER_DIR } from "./constants.mjs";

const init = async () => {
  sayHello();

  chdir(OS_USER_DIR);
  stdout.write(`You are currently in ${cwd()}\n`);

  stdin.on("data", async (chunk) => {
    const command = chunk.toString().trim().split(" ")[0];
    const commandArgs = chunk.toString().trim().split(" ").slice(1);

    await commands[command](commandArgs);
    stdout.write(`\nYou are currently in ${cwd()}\n`);
  });

  process.on("SIGINT", () => {
    sayGoodbye();
  });
};

init();
