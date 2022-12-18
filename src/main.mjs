import { argv, stdout } from "node:process";
import os from "os";

const regex = `^(.*?)${os.userInfo().username}`;
const osUserDir = process.cwd().match(regex)[0];

const greeting = () => {
  const nameArg = argv.find((arg) => arg.startsWith("--username"));

  if (nameArg) {
    stdout.write(`Welcome to the File Manager, ${nameArg.slice(11)}!\n`);
    stdout.write(`\nYou are currently in ${osUserDir}\n`);
  }
};

const init = () => {
  greeting();
};

init();
