test("my", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const status = console.log(response.status);
  console.log(response.url);
  expect(response.status).toBe(response.status);
});
