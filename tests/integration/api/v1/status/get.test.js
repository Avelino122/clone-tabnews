test("GET to /api/v1/contet should to return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response.status);
  console.log(response.url);
  expect(response.status).toBe(200);
  
  const responseBody = await response.json()
  expect(responseBody.update_time).toBeDefined()
  const parseupdate = new Date(responseBody.update_time).toISOString()
  console.log(`parse:${parseupdate}`)
  expect(responseBody.update_time).toEqual(parseupdate)
  const versionResponse = responseBody.version_db
  console.log(versionResponse)
  expect(responseBody.version_db).toMatch(/16\.0/)
});
