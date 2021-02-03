import Api from '@/services/Api'

export default {
    async register (credentials) {
        const { data } = await Api().post('register', credentials)
        return data
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
    // async login (credentials) {
    //     const { data } = await Api().post('login', credentials)
    //     return data
    // },
    // nie bangla jak używam async i await :( 
}