import { stdin, stdout, chdir, cwd, stderr } from "node:process";
import os from "os";

import commands from "./commands/index.mjs";

import { sayGoodbye, sayHello } from "./greeting.mjs";

const USERNAME_REGEX = `^(.*?)${os.userInfo().username}`;
const OS_USER_DIR = cwd().match(USERNAME_REGEX)[0];

const init = async () => {
  sayHello();

  chdir(OS_USER_DIR);
  stdout.write(`You are currently in ${cwd()}\n`);

  stdin.on("data", async (chunk) => {
    const command = chunk.toString().trim().split(" ")[0];
    const commandArgs = chunk.toString().trim().split(" ").slice(1);

    if (commands[command]) {
      await commands[command](commandArgs);
    } else {
      stderr.write("\nInvalid input");
    }

    stdout.write(`\nYou are currently in ${cwd()}\n`);
  });

  process.on("SIGINT", () => {
    sayGoodbye();
  });
};

init();
