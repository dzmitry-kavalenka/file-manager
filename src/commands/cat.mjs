import fs from "fs/promises";
import { stderr, stdout } from "node:process";
import path from "path";

const readFile = async (args) => {
  try {
    if (!args[0]) {
      stderr.write("\nInvalid input\n");
      return;
    }

    const content = await fs.readFile(path.resolve(args[0]), {
      encoding: "utf8",
    });

    stdout.write(`\n${content}`);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default readFile;
