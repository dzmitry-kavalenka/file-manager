import { sayGoodbye } from "../greeting.mjs";
import goUp from "./up.mjs";
import goTo from "./cd.mjs";
import getListOfFiles from './ls.mjs'
import readFile from "./cat.mjs";

const commands = {
  "up": goUp,
  "cd": goTo,
  "ls": getListOfFiles,
  "cat": readFile,
  ".exit": sayGoodbye,
}

export default commands;