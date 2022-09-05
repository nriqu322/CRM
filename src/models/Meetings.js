const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Meetings = sequelize.define('meetings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  day: {
    type: DataTypes.DATE,
  },
  title: {
    type: DataTypes.STRING,
  },
  attendies: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Meetings;
