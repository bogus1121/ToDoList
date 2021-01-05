const Task = require('../models/Task')

module.exports = {
    async index (req, res) {
        try {
            const todos = await Todo.findAll({
                limit: 10
            })
            res.send(todos)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to load the song'
            })
        }
    },
    // async show (req, res) {
    //     try {
    //         const songs = await Song.findByPk(req.params.songId)
    //         res.send(songs)
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'An error has occured trying to load the song'
    //         })
    //     }
    // },

    async post (req, res) {
        console.log(req.body);
        const taskName = req.body.task
        const taskPriority = req.body.priority
        
        await Task.create({
            taskName: taskName,
            priority: taskPriority
        })
        .then(result => {console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
        // try {
        //     // const todo = await Todo.create(req.body)
        //     // console.log(todo);
        //     // res.send(todo)
        // } catch (err) {
        //     res.status(500).send({
        //         error: 'An error has occured trying to create the data'
        //     })
        // }
    }



    // async post (req, res) {
        
    //     const taskName = req
    //     console.log("this is a task name: " + taskName);
    //     res.send(taskName.body)
    //     try {
    //         // await Todo.create(req.body).then(result => {console.log(result)}).catch(err =>{console.log(err);})
    //         const todo = await Todo.create(req.body)
    //         console.log("this is a task name: " + req.body);
    //         res.send(todo)
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'An error has occured trying to create the data'
    //         })
    //     }
    // }
}