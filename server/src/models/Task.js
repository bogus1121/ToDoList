const sequelize = require('./index')

Task = (sequelize, DataTypes) => {
    const Task  = sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        taskName: DataTypes.STRING,
        priority: DataTypes.INTEGER
    })
    
    return Task
}

module.exports = Task;