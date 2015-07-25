var Sequelize = require('sequelize');

module.exports = function(sequelize){
  var User = require('./user')(sequelize);

  var Message = sequelize.define('Message', 
    {
      text: Sequelize.TEXT,
      roomname: Sequelize.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Message.belongsTo(models.User);
        }
      }
    });

  return Message;
}