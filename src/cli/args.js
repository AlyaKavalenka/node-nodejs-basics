const parseArgs = () => {
  const filterValue = "--";
  const argsArr = process.argv;
  const newArr = [];
  argsArr.map((item, id, arr) => {
    if (item.match(filterValue)) {
      newArr.push([item.replace("--", ""), arr[id + 1]])
    }
  });
  const result = newArr.map((item) => item.join(" is ")).join(", ");
  console.log(result);
};

parseArgs();