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

