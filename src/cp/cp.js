import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '.', 'files', 'script.js');

  const subProcess = spawn("node", [filePath, args]);

  process.stdin.on("data", (data) => subProcess.stdin.write(data));

  subProcess.stdout.on("data", (data) => console.log(data.toString()));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["1", "2", "3"]);
