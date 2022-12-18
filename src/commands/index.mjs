import { sayGoodbye } from "../greeting.mjs";
import goUp from "./up.mjs";
import goTo from "./cd.mjs";

const commands = {
  "up": goUp,
  ".exit": sayGoodbye,
  "cd": goTo,
}

export default commands;