import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from 'url';
import { createUnzip } from "zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'files', 'fileToCompress.txt');
  const gzipFilePath = path.join(__dirname, '.', 'files', 'archive.gz');

  const unzip = createUnzip();
  const source = createReadStream(gzipFilePath);
  const destination = createWriteStream(filePath);

  pipeline(source, unzip, destination, (err) =>
    err ? console.log(err.message) : true
  );
};

await decompress();