const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../util/database')

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    taskName: DataTypes.STRING,
    priority: DataTypes.INTEGER
});

module.exports = Task;