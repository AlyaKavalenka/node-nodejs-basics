import fs from "fs";
import { pathToFilesFolder, throwError } from "./utils.js";

const list = async () => {
  if (fs.existsSync(pathToFilesFolder)) {
    console.log(fs.readdirSync(pathToFilesFolder));
  } else {
    throwError();
  }
};

await list();