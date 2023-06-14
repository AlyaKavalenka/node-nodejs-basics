const transform = async () => {
  process.stdin.on("data", (data) => process.stdout._write(data))
};

await transform();