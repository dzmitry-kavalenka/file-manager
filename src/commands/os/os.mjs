import os from "os";
import { arch, stderr } from "process";

import { getCPUsInfo } from "./utils.mjs";

const commands = {
  "--EOL": () => console.log(`\n${JSON.stringify(os.EOL)}`),
  "--cpus": () => console.table(getCPUsInfo()),
  "--homedir": () => console.log(`\n${os.homedir()}`),
  "--username": () => console.log(`\n${os.userInfo().username}`),
  "--architecture": () => console.log(`\n${arch}`),
};

const getOSInfo = (args) => {
  if (!args[0]) {
    stderr.write("\nInvalid input\n");
  }

  if (commands[args[0]]) {
    commands[args[0]]();
  } else {
    stderr.write("\nInvalid input\n");
  }
};

export default getOSInfo;
