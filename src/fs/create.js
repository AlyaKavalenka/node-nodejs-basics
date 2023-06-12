import fs from "fs";
import { throwError } from "./utils.js";

const create = async () => {
  const fileName = "src/fs/files/fresh.txt";
  const dataInNewFile = "I am fresh and young";

  if (fs.existsSync(fileName)) {
    throwError();
  } else {
    fs.writeFileSync(fileName, dataInNewFile);
  }
};

await create();