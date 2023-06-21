import fs from "fs";
import path from "path";
import { pathToFilesFolder, throwError } from "./utils.js";

const read = async () => {
  const fileToRead ="fileToRead.txt";
  const pathToFileForRead = path.join(pathToFilesFolder, fileToRead);
  
  if (fs.existsSync(pathToFileForRead)) {
    const data = fs.readFileSync(pathToFileForRead, "utf-8");
    console.log(data);
  } else {
    throwError();
  }
};

await read();