// simple-Crud/backend/config/database.js
const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('crud_db', 'nugrahaddict', 'P@ssw0rd123', {
  host: 'db',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL successfully!');
  })
  .catch(err => {
    console.error('Unable to connect to PostgreSQL:', err);
  });

module.exports = sequelize;
