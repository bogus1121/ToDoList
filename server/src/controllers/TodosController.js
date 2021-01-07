const Task = require('../models/Task')

module.exports = {
    async index (req, res) {
        try {
            const tasks = await Task.findAll() //{limit: 10}
            const arrTasks = Object.assign([], tasks)
            console.log(arrTasks);
            res.send(arrTasks.reverse())
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to load tasks'
            })
        }
    },
    async show (req, res) {
        try {
            const editedTask = await Task.update(
                { taskName: req.body.task },
                { where : { _id: req.params.id } }
            )
            handleResoult(editedTask)
            res.send(editedTask)
            // const songs = await Song.findByPk(req.params.songId)
            // res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to load the task'
            })
        }
    },

    async post (req, res) {
        try {
            const task = await Task.create({
                taskName: req.body.task,
                priority: req.body.priority
            })
            console.log(task);
            console.log(task.id)
            res.send(task.updatedAt)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the data'
            })
        }
    }
}