var models = require('../models');
var bluebird = require('bluebird');

var User = models.User;
var Message = models.Message;

module.exports = {
  messages: {

    get: function (req, res) {
      Message.findAll().then( function(msgs) {
        res.send({result: msgs});
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {

      User.findOne({ 
        where: {
          username: req.body.username
        }
      })
      .then( function(usr) {

        Message.build({
          roomname: req.body.roomname,
          UserId: usr.id,
          text: req.body.text
        }).save();

        res.end();
      });

    } // a function which handles posting a message to the database

  },

  users: {

    get: function (req, res) {
      User.findAll().then( function(usrs) {
        res.send({result: msgs});
      });  
    },
    
    post: function (req, res) {
      var newUser = User.build({
        username: req.body.username
      }).save();

      res.end();
    }

  }
};

