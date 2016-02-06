var db = require('../db');

module.exports = {
  messages: { 
    get: function (callback) {  // a function which produces all the messages
      console.log('models');
      db.getMessages(function(rows){
        callback(rows);
      });
    }, 
    post: function (message) {  // a function which can be used to insert a message into the database

    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message) {
      db.connection.query('INSERT INTO messages SET ?', message, function(err, result){
        if(err){
          console.log('Error: ' + err);
        } else {
          console.log('Result: ' + result);
          for (var key in result) {
            console.log(key,': ',result[key]);
          }
        }
      });
    }
  }
};

