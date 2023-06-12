import fs from "fs";
import { throwError } from "./utils.js";

const copy = async () => {
  const pathFrom = "src/fs/files";
  const pathTo = "src/fs/files_copy";

  if (fs.existsSync(pathTo) || !fs.existsSync(pathFrom)) {
    throwError();
  } else {
    fs.cpSync(pathFrom, pathTo, {recursive: true});
  }
};

await copy();
