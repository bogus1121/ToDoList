const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const sequelize = require('./util/database')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/register', (req, res) => {
//     res.send({
//         message: 'hello world'
//     })
// })

require('./routes')(app)

sequelize
    .sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`);
    })
    .catch(err => {
        console.log(err);
    })