import { Transform } from "stream";

const transform = async () => {
  const reversed = new Transform({
    transform(chunk, _, callback) {
      const reverse = `${chunk.toString().split("").reverse().join("")}\n------\n`;
      callback(null, reverse);
    }
  })
  process.stdin.pipe(reversed).pipe(process.stdout);
};

await transform();