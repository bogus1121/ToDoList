import Api from '@/services/Api'

export default {
    async post (song) {
        return await Api().post('songs', song)
    },
    async index () {
        const { data } = await Api().get('songs')
        return data
    },
    show (songId) {
        return Api().get(`songs/${songId}`)
    }
}
