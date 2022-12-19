import fs from "fs/promises";
import { stderr } from "node:process";
import path from "path";

const removeFile = async (args) => {
  if (!args[0]) {
    stderr.write("\nInvalid input\n");
    return;
  }

  try {
    await fs.rm(path.resolve(args[0]));
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default removeFile;
