import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from 'url';
import { createGzip } from "zlib";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'files', 'fileToCompress.txt');
  const gzipFilePath = path.join(__dirname, '.', 'files', 'archive.gz');

  const gzip = createGzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(gzipFilePath);

  pipeline(source, gzip, destination, (err) => 
    err ? console.log(err.message) : true
  );
};

await compress();