import { chdir, stderr } from "node:process";

const goTo = (args) => {
  try {
    if (!args[0]) {
      stderr.write("\nInvalid input\n");
      return;
    }

    chdir(args[0]);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default goTo;
