const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Contacts = require('./Contacts');
const Projects = require('./Projects');

const Customers = sequelize.define('customers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});

Customers.hasMany(Contacts, {
  foreignKey: 'customerId',
  sourceKey: 'id',
});

Contacts.belongsTo(Customers, {
  foreignKey: 'customerId',
  targetId: 'id',
});

Customers.hasMany(Projects, {
  foreignKey: 'customerId',
  sourceKey: 'id',
});

Projects.belongsTo(Customers, {
  foreignKey: 'customerId',
  targetId: 'id',
});

module.exports = Customers;
