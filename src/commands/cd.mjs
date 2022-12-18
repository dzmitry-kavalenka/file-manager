import { chdir, stderr } from "node:process";

const goTo = (args) => {
  try {
    chdir(args[0]);
  } catch (error) {
    stderr.write("\nOperation failed\n");
  }
};

export default goTo;
