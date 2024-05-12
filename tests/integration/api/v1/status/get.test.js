test("GET to /api/v1/contet should to return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response.status);
  console.log(response.url);
  expect(response.status).toBe(200);
});
