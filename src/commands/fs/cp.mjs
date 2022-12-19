import fs from "fs";
import { stderr } from "node:process";
import path from "path";

const copyFile = async (args) => {
  if (!args[0] || !args[1]) {
    stderr.write("\nInvalid input\n");
    return;
  }

  const readable = fs.createReadStream(`${path.resolve(args[0])}`);
  const writable = fs.createWriteStream(
    `${path.resolve(`${args[1]}/${args[0]}`)}`
  );

  const pipe = readable.pipe(writable);

  pipe.on("error", () => {
    stderr.write("\nOperation failed\n");
  });
};

export default copyFile;
