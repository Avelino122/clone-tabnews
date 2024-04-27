import database from "../../../../infra/database";
async function stats(request, response) {
  const result = await database.query("CREATE TABLE t1 (col1 text, col2 int);");
  console.log(result);
  response.status(200).json("{Thierrys: 200}");
}

export default stats;
