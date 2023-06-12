import fs from "fs";
import path from "path";
import { pathToFilesFolder, throwError } from "./utils.js";

const create = async () => {
  const fileName = "fresh.txt";
  const fileNamePath = path.join(pathToFilesFolder, fileName);
  const dataInNewFile = "I am fresh and young";

  if (fs.existsSync(fileNamePath)) {
    throwError();
  } else {
    fs.writeFileSync(fileNamePath, dataInNewFile);
  }
};

await create();