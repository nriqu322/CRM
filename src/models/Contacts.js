const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Meetings = require('./Meetings');

const Contacts = sequelize.define('contacts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
  job: {
    type: DataTypes.STRING,
  },
});

Contacts.hasMany(Meetings, {
  foreignKey: 'contactId',
  sourceKey: 'id',
});

Meetings.belongsTo(Contacts, {
  foreignKey: 'contactId',
  targetId: 'id',
});

module.exports = Contacts;
