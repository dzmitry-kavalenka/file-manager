import fs from "fs";
import { rm } from "fs/promises";
import { stderr } from "node:process";
import path from "path";

import copyFile from "./cp.mjs";

const moveFile = async (args) => {
  try {
    await copyFile(args);
    await rm(`${path.resolve(args[0])}`);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default moveFile;
