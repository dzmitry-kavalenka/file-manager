import { createReadStream, createWriteStream } from "fs";
import { stat } from "fs/promises";
import { createBrotliCompress } from "zlib";
import { stderr } from "node:process";
import path from "path";

const compress = async (args) => {
  if (!args[1]) {
    stderr.write("\nInvalid input\n");
  }

  try {
    const { name, ext } = path.parse(args[0]);

    await stat(path.resolve(args[0]));

    const readStream = createReadStream(path.resolve(args[0]));
    const writeStream = createWriteStream(
      path.resolve(`${args[1]}/${name}${ext}.br`)
    );

    const brotli = createBrotliCompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on("error", (error) => {
      stderr.write("\nOperation failed\n");
    });
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default compress;
