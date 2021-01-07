import Api from '@/services/Api'

export default {
    async post (todo) {
        return await Api().post('todos', todo)
    },
        // async remove (todo) {
    //     return await Api().post('todos', todo)
    // },
    // async edit (todo) {
    //     return await Api().post('todos', todo)
    // },
    async index () {
        const { data } = await Api().get('todos')
        return data
    },
    // show (songId) {
    //     return Api().get(`songs/${songId}`)
    // }
}
