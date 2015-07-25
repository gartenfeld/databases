var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if (err) { 
          res.status(501).end("Service not available.");
        } else {
          res.status(200).json({results:results});
        } 
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.users.get(function(err, results){
        var userArray = results;
        var user_id = null;
        for (var i = 0; i < userArray.length; i++) {
          if (userArray[i].username===req.body.username) user_id = userArray[i].objectId;
        };
        models.messages.post(function(err){
          if(err){
            res.status(400).end("Bad Request.");
          }else{
            res.status(201).end();
          }
        }, req.body.text, req.body.roomname, user_id);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err) { 
          res.status(501).end("Service not available.");
        } else {
          res.status(200).json({results:results});
        } 
      })
    },
    post: function (req, res) {}
  }
};

