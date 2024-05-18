import database from "/infra/database";
async function stats(request, response) {
  const result = await database.query("SELECT 1 + 1  AS SUM");
  console.log(result);
  response.status(200).json("{Thierrys: 200}");
}

export default stats;
