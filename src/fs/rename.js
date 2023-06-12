import fs from "fs";
import path from "path";
import { throwError } from "./utils.js";

const rename = async () => {
  const oldName = "wrongFilename.txt";
  const newName = "properFilename.md";
  
  const basePath = path.join("src", "fs", "files");
  const oldNamePath = path.join(basePath, oldName);
  const newNamePath = path.join(basePath, newName);

  if (fs.existsSync(newNamePath) || !fs.existsSync(oldNamePath)) {
    throwError();
  } else {
    fs.renameSync(oldNamePath, newNamePath);
  }
};

await rename();