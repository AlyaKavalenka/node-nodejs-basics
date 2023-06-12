import fs from "fs";

const copy = async () => {
  const pathFrom = "src/fs/files";
  const pathTo = "src/fs/files_copy";
  const errorMessage = "FS operation failed";

  if (fs.existsSync(pathTo) || !fs.existsSync(pathFrom)) {
    throw new Error(errorMessage);
  } else {
    fs.cpSync(pathFrom, pathTo, {recursive: true});
  }
};

await copy();
