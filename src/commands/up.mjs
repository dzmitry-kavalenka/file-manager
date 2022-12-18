import path from "node:path";
import { chdir, cwd } from "node:process";

const goUp = () => {
  try {
    const currentDirArr = cwd().split(path.sep);

    if (currentDirArr.length > 1) {
      const upperDir = currentDirArr
        .splice(0, currentDirArr.length - 1)
        .join(path.sep);

      chdir(upperDir);
    }
  } catch (err) {}
};

export default goUp;
