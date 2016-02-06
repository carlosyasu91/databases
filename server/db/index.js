var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var id = 0;

module.exports.connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123',
  database : 'chat'
});

// exports.postMessage = function(message) {
//   message.id = 1;
//   var query = connection.query('INSERT INTO messages SET ?', message, function(err, result){
//     if (err) {
//       console.log('Error: ' + err);
//     } else {
//       console.log('Result: ' + result);
//       for (var key in result) {
//         console.log(key,': ',result[key]);
//       }
//     }
//   });
//   console.log(query);
//   // connection.query('INSERT INTO messages (id,username,text,roomname) VALUES ('+
//   //   (id++) + ',\''+ message.username +'\',\'' + message.text + '\',\'' + message.roomname + '\');');
// };

exports.getMessages = function(callback){
  connection.query('SELECT * FROM messages', function(err, rows) {
    if (err) throw err;
    callback(rows);
  });
};
