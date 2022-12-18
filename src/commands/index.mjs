import { sayGoodbye } from "../greeting.mjs";
import goUp from "./up.mjs";
import goTo from "./cd.mjs";
import getListOfFiles from './ls.mjs'
import readFile from "./cat.mjs";
import createFile from "./add.mjs";
import rename from "./rn.mjs";
import copyFile from "./cp.mjs";
import moveFile from "./mv.mjs";

const commands = {
  "up": goUp,
  "cd": goTo,
  "ls": getListOfFiles,
  "cat": readFile,
  "add": createFile,
  "rn": rename,
  "cp": copyFile,
  "mv": moveFile,
  ".exit": sayGoodbye,
}

export default commands;