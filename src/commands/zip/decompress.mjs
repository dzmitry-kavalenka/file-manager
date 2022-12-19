import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { stderr } from "node:process";
import path from "path";

const decompress = async (args) => {
  if (!args[1]) {
    stderr.write("\nInvalid input\n");
  }

  const { name } = path.parse(args[0]);

  const readStream = createReadStream(path.resolve(args[0]));
  const writeStream = createWriteStream(path.resolve(`${args[1]}/${name}`));

  const brotli = createBrotliDecompress();

  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on("error", (error) => {
    stderr.write("\nOperation failed\n");
  });
};

export default decompress;
