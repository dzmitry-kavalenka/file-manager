import fs from "fs/promises";
import crypto from "crypto";
import { stderr } from "process";
import path from "path";

const calculateHash = async (args) => {
  try {
    if (!args[0]) {
      stderr.write("\nInvalid input\n");
    }

    const content = await fs.readFile(path.resolve(args[0]), {
      encoding: "utf8",
    });
    const hex = crypto.createHash("sha256").update(content).digest("hex");

    console.log(`\n${hex}`);
  } catch (error) {
    console.log(error);
    stderr.write("\nOperation failed\n");
  }
};

export default calculateHash;
