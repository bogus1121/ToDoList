const {Todo} = require('../models')

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
        try {
            await Todo.create(req.body).then(result => {console.log(result)}).catch(err =>{console.log(err);})
            // console.log(req.body);
            // const todo = await Todo.create(req.body)
            res.send(todo)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the data'
            })
        }
    }
}