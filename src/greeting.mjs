import { argv } from "node:process";

export let username = "";

export const sayHello = () => {
  const nameArg = argv.find((arg) => arg.startsWith("--username"));
  username = nameArg ? nameArg.slice(11) : 'Anonymous';

  console.log(`Welcome to the File Manager, ${username}!\n`);
};

export const sayGoodbye = () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);

  process.exit(1);
};
