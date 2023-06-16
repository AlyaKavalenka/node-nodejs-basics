import { Worker } from 'worker_threads';
import path, { resolve } from "path";
import { fileURLToPath } from 'url';
import os from 'os';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'worker.js');

  const logicCores = os.cpus().length;
  let initialValue = 10;

  const promiseArr = [];
  
  for (let i = 0; i < logicCores; i += 1) {
    promiseArr.push(new Promise((resolve, reject) => {
      const worker = new Worker(filePath, {
        workerData: initialValue,
      });
      worker.on("message", (msg) => resolve({ status: "resolved", data: msg }));
      worker.on("error", () => reject({ status: "error", data: null }))
    }))
    initialValue++;
  }

  await Promise.all(promiseArr).then((values) => console.log(values));
};

await performCalculations();