import os from "os";

const USERNAME_REGEX = `^(.*?)${os.userInfo().username}`;

export const OS_USER_DIR = process.cwd().match(USERNAME_REGEX)[0];
