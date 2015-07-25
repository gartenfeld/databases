var connection = require('../db');


          /*var result = [];
          for (var i = 0; i < rows.length; i++) {
            var object = {
              id:rows[i].id,
              text:rows[i].text,
              roomname:rows[i].roomname
            };
          };*/

module.exports = {
  messages: {
    get: function (cb) {
      connection.query('SELECT MESSAGES.id AS objectId, MESSAGES.text as text, MESSAGES.roomname as roomname, MESSAGES.created_at as createdAt, USERS.username as username FROM MESSAGES LEFT JOIN USERS ON MESSAGES.users_id = USERS.id;', function (err, rows, fields) {
        if (err) { 
          cb(err,null);
        } else {
          cb(null,rows);
        }
      });
    }, // a function which produces all the messages
    post: function (cb, text, roomname, user_id) {
      connection.query('INSERT INTO `chat`.`messages` (`text`, `roomname`, `created_at`, `users_id`) VALUES ("'+text+'", "'+roomname+'", NOW(), "'+user_id+'");', function (err) {
        if (err) { 
          cb(err);
        } else {
          cb(null);
        }
      });
    } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (cb) {
      connection.query('SELECT USERS.id AS objectId, USERS.username as username FROM USERS;', function (err, rows, fields) {
        if (err) { 
          cb(err,null);
        } else {
          cb(null,rows);
        }
      });
    },
    post: function (cb, username) {
      connection.query('INSERT INTO `chat`.`users` (`username`) VALUES (`'+username+'`);', function (err) {
        if (err) { 
          cb(err);
        } else {
          cb(null);
        }
      });
    }
  }
};

