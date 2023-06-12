import fs from "fs";
import path from "path";
import { pathToFilesFolder, throwError } from "./utils.js";

const remove = async () => {
  const pathToFileForDelete = path.join(pathToFilesFolder, "fileToRemove.txt");

  fs.existsSync(pathToFileForDelete) ? fs.unlinkSync(pathToFileForDelete) : throwError();
};

await remove();