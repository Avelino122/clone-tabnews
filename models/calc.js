function somar(param1, param2) {
  if (typeof param1 !== "number") {
    return "Error param1";
  }
  if (typeof param2 !== "number") {
    return "Error param2";
  } else if (typeof param2 == "") {
    return "empty Error";
  }
  return param1 + param2;
}
exports.somar = somar;
