var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.0.43",
  user: "tronic",
  password: "storm",
  database: "worktools"
});


module.exports = con;