import goUp from "./up.mjs";
import goTo from "./cd.mjs";
import getListOfFiles from "./ls.mjs";
import readFile from "./cat.mjs";
import createFile from "./add.mjs";
import rename from "./rn.mjs";
import copyFile from "./cp.mjs";
import moveFile from "./mv.mjs";
import removeFile from "./rm.mjs";

export default {
  up: goUp,
  cd: goTo,
  ls: getListOfFiles,
  cat: readFile,
  add: createFile,
  rn: rename,
  cp: copyFile,
  mv: moveFile,
  rm: removeFile,
};
