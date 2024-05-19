import database from "/infra/database";
async function stats(request, response) {
  const update_at =  new Date().toISOString()
  const version =  await database.query("SELECT version();");
  const versionDB = version.rows[0].version;
  const connects = await database.query('SELECT * FROM pg_roles WHERE rolname = current_user;')
  const active_connections = connects.rows[0].rolname
  const max_connect = await database.query('SHOW max_connections;')
  const pqmax_connect = max_connect.rows[0].max_connections
  const open_connections = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'db_do_Thierrys';"
  )
  const filterOpenConnect = open_connections.rows[0].count

  console.log(connects)
  console.log(version)
  console.log(active_connections)
  console.log(pqmax_connect)
  console.log(open_connections)

  console.log(filterOpenConnect)

  response.status(200).json({
    update_time: update_at,
    version_db:  versionDB,
    connects_db: active_connections,
    connect_max: parseInt(pqmax_connect),
    open_connections: parseInt(filterOpenConnect)
    
  });
}

export default stats;
//made by thierry