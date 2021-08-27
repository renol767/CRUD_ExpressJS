module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM data", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM data WHERE id = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO data SET 
        name = '${data.name}', 
        email = '${data.email}',
        city = '${data.city}'`,
        callback
      )
    },
  
    update: function(con, data, id, callback) {
      con.query(
        `UPDATE data SET 
        name = '${data.name}', 
        email = '${data.email}',
        city = '${data.city}' 
        WHERE id = ${id}`,
        callback
      )
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM data WHERE id = ${id}`, callback)
    }
  }