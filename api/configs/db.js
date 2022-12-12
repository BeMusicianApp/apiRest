const Sequelize = require('sequelize');

const db = new Sequelize('appmusic', 'root', 'root', {
    host: 'Localhost',
    dialect: 'mysql',
  });

module.exports = db