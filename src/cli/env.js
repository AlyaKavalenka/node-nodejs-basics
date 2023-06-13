const parseEnv = () => {
  const filterValue = "RSS_";

  const filteredEnvVarsArr = Object.entries({...process.env}).filter((item) => item[0].match(filterValue));
  const result = filteredEnvVarsArr.map((item) => item.join("=")).join("; ");

  console.log(result);
};

parseEnv();