<template>
    <v-layout> 
        <v-flex xs6 offset-xs3 class="mt-16 pt-16">
            <base-card title="Login">
                <v-text-field
                    v-if="!$store.state.isUserLoggedIn"
                    v-model="email"
                    name="email"
                    label="Email..."
                    class="pt-3 pb-3"
                    type="email"
                    hide-details
                    outlined
                    dense
                ></v-text-field>
                <v-text-field
                    v-if="!$store.state.isUserLoggedIn"
                    v-model="password"
                    name="password"
                    label="Password..."
                    class="pt-3 pb-3"
                    type="password"
                    hide-details
                    outlined
                    dense
                ></v-text-field>
                <div
                    v-if="!$store.state.isUserLoggedIn"
                    class="error mb-2 pl-1 pr-1" 
                    v-html="error">
                </div>
                <v-btn 
                    v-if="!$store.state.isUserLoggedIn"
                    @click="login"
                    color="#1e3d59"
                    dark>
                        Login
                </v-btn>
                <v-btn
                    v-if="$store.state.isUserLoggedIn"
                    to="todo"
                    color="#1e3d59"
                    dark>
                        Go to TODOS!
                </v-btn>
            </base-card>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import BaseCard from '@/components/UI/BaseCard'

export default {
    data () {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        async login() {
            try{
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                    })
                    console.log(response);
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.error = null
                }   catch (error) {
                this.error = error.response.data.error
            }
        }
    },
    components: {
        BaseCard
    }
}
</script>