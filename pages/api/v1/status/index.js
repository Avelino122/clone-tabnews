import database from "/infra/database";
async function stats(request, response) {
  const update_at =  new Date().toISOString()
  const version =  await database.query("SELECT version();");
  const versionDB = version.rows[0].version;
  const connects = await database.query('SELECT * FROM pg_roles WHERE rolname = current_user;')
  const active_connections = connects.rows[0].rolname
  console.log(connects)
  console.log(version)
  console.log(active_connections)
  response.status(200).json({
    update_time: update_at,
    version_db:  versionDB,
    connects_db: active_connections
  });
}

export default stats;
