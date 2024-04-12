function somar(param1, param2) {
  if (typeof param1 !== "number") {
    return "Error param1";
  }
  if (typeof param2 !== "number") {
    return "Error param2";
  }
  return param1 + param2;
}

exports.somar = somar;
