import fs from "fs";
import { throwError } from "./utils.js";

const remove = async () => {
  const pathToFileForDelete = "src/fs/files/fileToRemove.txt";

  fs.existsSync(pathToFileForDelete) ? fs.unlinkSync(pathToFileForDelete) : throwError();
};

await remove();