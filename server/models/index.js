var sequelize = require('../db');

var models = {};
models.User = require('./user')(sequelize);
models.Message = require('./message')(sequelize);

Object.keys(models).forEach(function (modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});