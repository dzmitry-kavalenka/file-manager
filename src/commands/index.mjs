import { sayGoodbye } from "../greeting.mjs";
import goUp from "./up.mjs";

const commands = {
  "up": goUp,
  ".exit": sayGoodbye,
}

export default commands;