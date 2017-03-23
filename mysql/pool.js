`/**
 * 创建数据连接池
 */
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'koa_demo'
  });

pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('SELECT * FROM _mysql_session_store', function(error, results, fields) {
        // And done with the connection.
        connection.release();

        // Handle error after the release.
        if (error)
            throw error;

            // Don't use the connection here, it has been returned to the pool.
        }
    );
});
`
