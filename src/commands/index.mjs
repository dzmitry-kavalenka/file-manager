import fsCommands from "./fs/index.mjs";
import osCommands from "./os/os.mjs";
import calculateHash from "./hash/hash.mjs";
import zipCommands from './zip/index.mjs';
import { sayGoodbye } from "../greeting.mjs";

const commands = {
  ...fsCommands,
  ...zipCommands,
  os: osCommands,
  hash: calculateHash,
  ".exit": sayGoodbye,
};

export default commands;
