import fs from "fs";

const create = async () => {
  const fileName = "src/fs/files/fresh.txt";
  const dataInNewFile = "I am fresh and young";
  const errorMessage = "FS operation failed";

  if (fs.existsSync(fileName)) {
    throw new Error(errorMessage);
  } else {
    fs.writeFileSync(fileName, dataInNewFile);
  }
};

await create();