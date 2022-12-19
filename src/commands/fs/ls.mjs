import { cwd, stderr } from "node:process";
import fs from "fs/promises";

const getListOfFiles = async () => {
  try {
    const files = await fs.readdir(cwd());

    const filesStatsPromises = files.map(async (file) => ({
      Name: file,
      Type: (await fs.lstat(`${cwd()}/${file}`)).isDirectory()
        ? "directory"
        : "file",
    }));

    const table = await Promise.all(filesStatsPromises);

    const sortedByType = table.sort(
      (a, b) =>
        +(a.Type > b.Type) ||
        +(a.Type === b.Type) - 1 ||
        +(a.Name > b.Name) ||
        +(a.Name === b.Name) - 1
    );

    console.table(sortedByType);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default getListOfFiles;
