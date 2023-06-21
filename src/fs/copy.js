import fs from "fs";
import path from "path";
import { pathToFilesFolder, throwError } from "./utils.js";

const copy = async () => {
  const pathFrom = path.join(pathToFilesFolder);
  const pathTo = "src/fs/files_copy";

  if (fs.existsSync(pathTo) || !fs.existsSync(pathFrom)) {
    throwError();
  } else {
    fs.cpSync(pathFrom, pathTo, {recursive: true});
  }
};

await copy();
