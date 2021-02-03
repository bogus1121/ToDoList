<template>
    <v-layout> 
        <v-flex xs6 offset-xs3 class="mt-16 pt-16">
            <base-card title="Register">
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
                <v-alert
                v-if="error"
                border="bottom"
                colored-border
                type="warning"
                elevation="2"
                >
                {{error}}
                </v-alert>
                <v-btn 
                    @click="register"
                    v-if="!$store.state.isUserLoggedIn"
                    color="#1e3d59"
                    dark>
                        Register
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
        async register() {
            try{
              const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response);
            this.error = null
            this.$store.dispatch('setToken', response.token)
            this.$store.dispatch('setUser', response.user)
          } catch (error) {
            this.error = error.response.data.error
          }
        }
    },
    components: {
        BaseCard
    }
}
</script>