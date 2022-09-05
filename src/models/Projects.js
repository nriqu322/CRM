const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Meetings = require('./Meetings');

const Projects = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  start: {
    type: DataTypes.DATEONLY,
  },
  end: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.STRING,
  },
});

Projects.hasMany(Meetings, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

Meetings.belongsTo(Projects, {
  foreignKey: 'projectId',
  targetId: 'id',
});

module.exports = Projects;
