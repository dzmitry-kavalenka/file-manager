import fs from "fs/promises";
import { cwd, stderr } from "node:process";
import path from "path";

const rename = async (args) => {
  try {
    if (!args[0] || !args[1]) {
      stderr.write("\nInvalid input\n");
      return;
    }

    await fs.rename(`${path(args[0])}`, `${path(args[1])}`);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default rename;
