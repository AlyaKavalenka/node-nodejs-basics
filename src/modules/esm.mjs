import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { readFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = readFileSync(new URL('./files/a.json', import.meta.url), "utf-8");
} else {
  unknownObject = readFileSync(new URL('./files/b.json', import.meta.url), "utf-8");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${pathToFileURL(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

