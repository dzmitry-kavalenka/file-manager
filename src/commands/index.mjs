import fsCommands from "./fs/index.mjs";
import osCommands from "./os/os.mjs";
import { sayGoodbye } from "../greeting.mjs";
import calculateHash from "./hash/hash.mjs";

const commands = {
  ...fsCommands,
  os: osCommands,
  hash: calculateHash,
  ".exit": sayGoodbye,
};

export default commands;
