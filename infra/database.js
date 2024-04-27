import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "thierrys",
  });
  await client.connect();
  const results = await client.query(queryObject);
  await client.end();
  return results;
}

export default {
  query: query,
};
