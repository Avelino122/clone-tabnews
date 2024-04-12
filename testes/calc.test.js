const calc = require("../models/calc.js");

test("Somar()= 2 + 2 = 4", () => {
  const results = calc.somar(2, 2);
  expect(results).toBe(4);
});

test("Somar() = string + Number = Error", () => {
  const results = calc.somar("oi", 2);
  expect(results).toBe("Error param1");
});

test("Somar() = Number + string  = Error", () => {
  const results = calc.somar(2, "pram2");
  expect(results).toBe("Error param2");
});

test("Somar() = Number + string  = Error", () => {
  const results = calc.somar(2, "pram2");
  expect(results).toBe("Error param2");
});

test("Somar() = Number + string  = Error", () => {
  const results = calc.somar(2, "pram2");
  expect(results).toBe("Error param2");
});
