const calc = require("../../models/calc.js");

test("Somar() = 2 + 2 = 4", () => {
  const results = calc.somar(2, 2);
  expect(results).toBe(4);
});

test("Somar() = 'oi' + 2 = Error param1", () => {
  const results = calc.somar("oi", 2);
  expect(results).toBe("Error param1");
});

test("Somar() = 2 + 'pram2' = Error param2", () => {
  const results = calc.somar(2, "pram2");
  expect(results).toBe("Error param2");
});

test("Somar() = 'param1' + empty error = empty Error", () => {
  const results = calc.somar();
  expect(results).toBe("Error param1");
});

test("one+one", () => {
  expect(3).toBe(3);
});
