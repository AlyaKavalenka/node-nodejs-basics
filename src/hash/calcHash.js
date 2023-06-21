import { createHash } from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const content = fs.readFileSync(new URL('./files/fileToCalculateHashFor.txt', import.meta.url), "utf-8");
  const result = createHash("sha256").update(content).digest("hex");
  console.log(result);
};

await calculateHash();