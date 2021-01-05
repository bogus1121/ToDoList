const Sequelize = require('sequelize')
const config = require('../config/config')

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// const sequelize = new Sequelize('todos', 'todos', 'todos', {
//     dialect: process.env.DIALECT || 'sqlite',
//     host: process.env.HOST || 'localhost',
//     port: process.env.PORT || 3306,
//     storage: './todos2.sqlite'
// })

module.exports = sequelize;