const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    taskName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    priority: DataTypes.INTEGER
});

module.exports = Task;
