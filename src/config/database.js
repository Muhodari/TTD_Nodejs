const Sequilize = require('sequelize');

const sequilize = new Sequilize('hoaxify', 'my-db-user', 'db-p4ss', {
  dialect: 'sqlite',
  Storage: './database.sqlite',
  logging: false,
});

module.exports = sequilize;
