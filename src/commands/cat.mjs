import fs from "fs/promises";
import { stderr, stdout } from "node:process";

const readFile = async (args) => {
  try {
    if (!args[0]) {
      stderr.write("\nInvalid input\n");
      return;
    }

    const content = await fs.readFile(args[0], { encoding: "utf8" });

    stdout.write(`\n${content}`);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default readFile;
