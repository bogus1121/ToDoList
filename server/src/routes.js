const TodosController = require('./controllers/TodosController')

module.exports = (app) => {
    // app.post('/register', 
    //     AuthenticationControllerPolicy.register,
    //     AuthenticationController.register)
    // app.post('/login',
    //     AuthenticationController.login)

    app.get('/todos',
        TodosController.index)
    app.post('/todos',
        TodosController.post)
}