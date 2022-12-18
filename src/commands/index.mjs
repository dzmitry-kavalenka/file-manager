import { sayGoodbye } from "../greeting.mjs";
import goUp from "./up.mjs";
import goTo from "./cd.mjs";
import getListOfFiles from './ls.mjs'

const commands = {
  "up": goUp,
  "cd": goTo,
  "ls": getListOfFiles,
  ".exit": sayGoodbye,
}

export default commands;