var models = require('../models');



module.exports = {
  messages: {
    get: function (req, res) {  // a function which handles a get request for all messages
      models.messages.get(function(messages){
        res.statusCode = 200;
        res.end(messages);
      });
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('controller');

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("Handling /classes/users");
    },
    post: function (req, res) {
      var message = req.body;
      message.username = message.username || 'anonymous';
      message.roomname = message.roomname || 'lobby';
      message.text = message.text || 'hello world';
      models.users.post(message);
      console.log("Handling POST /classes/users");
    }
  }
};

