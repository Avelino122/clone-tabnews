const calc = require("../models/calc.js");

test("somar 2 + 2 = 4", () => {
  const results = calc.somar(2, 2);
  expect(results).toBe(4);
});
