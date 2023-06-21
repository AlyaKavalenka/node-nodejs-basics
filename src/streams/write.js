import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'files', 'fileToWrite.txt');

  const stream = fs.createWriteStream(filePath);

  process.stdin.on("data", (data) => stream._write(data, "utf-8", (error) => {
    error ? console.log(error.message) : true;
  }));
};

await write();