test("GET to /api/v1/contet should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log("Response Status:", response.status);
  console.log("Response URL:", response.url);
  expect(response.status).toBe(200);
  
  const responseBody = await response.json();
  console.log("Response Body:", responseBody);

  expect(responseBody.update_time).toBeDefined();
  const parseupdate = new Date(responseBody.update_time).toISOString();
  console.log(`Parsed Update Time: ${parseupdate}`);
  expect(responseBody.update_time).toEqual(parseupdate);

  const versionResponse = responseBody.version_db;
  console.log("Version Response:", versionResponse);
  expect(versionResponse).toBeDefined();
  expect(typeof versionResponse).toBe("string");
  expect(versionResponse).toMatch(/16\.0/);

  const connectsResponse = responseBody.connect_max;
  console.log("Connects Response:", connectsResponse);
  expect(connectsResponse).toBeDefined();
  expect(connectsResponse).toBeGreaterThanOrEqual(1);

  const openConnections = responseBody.open_connections;
  console.log("Open Connections:", openConnections);
  expect(openConnections).toBeDefined();
  expect(openConnections).toBeGreaterThanOrEqual(1);

});
