import fs from "fs";
import path from "path";
import { pathToFilesFolder, throwError } from "./utils.js";

const rename = async () => {
  const oldName = "wrongFilename.txt";
  const newName = "properFilename.md";
  
  const oldNamePath = path.join(pathToFilesFolder, oldName);
  const newNamePath = path.join(pathToFilesFolder, newName);

  if (fs.existsSync(newNamePath) || !fs.existsSync(oldNamePath)) {
    throwError();
  } else {
    fs.renameSync(oldNamePath, newNamePath);
  }
};

await rename();