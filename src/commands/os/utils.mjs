import os from "os";

export const getCPUsInfo = () =>
  os
    .cpus()
    .map(({ model, speed }) => ({ model, speed: `${speed / 1000} GHz` }));
