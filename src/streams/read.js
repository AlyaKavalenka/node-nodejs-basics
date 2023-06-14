import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'files', 'fileToRead.txt');

  const stream = fs.createReadStream(filePath);
  
  stream.on("data", (chunk) => {
    process.stdout._write(chunk);
  });
};

await read();