import fs from "fs/promises";
import { cwd } from "node:process";

const createFile = async (args) => {
  try {
    if (!args[0]) {
      stderr.write("\nInvalid input\n");
      return;
    }

    await fs.writeFile(`${cwd()}/${args[0]}`, "", { flag: "wx" });
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default createFile;
