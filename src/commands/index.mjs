import fsCommands from "./fs/index.mjs";
import osCommands from "./os/index.mjs";
import { sayGoodbye } from "../greeting.mjs";

const commands = {
  ...fsCommands,
  os: osCommands,
  ".exit": sayGoodbye,
};

export default commands;
