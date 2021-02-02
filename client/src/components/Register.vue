<template>
    <v-layout> 
        <v-flex xs6 offset-xs3 class="mt-16 pt-16">
            <base-card title="Register">
                <v-text-field
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
                    class="error mb-2 pl-1 pr-1" 
                    v-html="error">
                </div>
                <v-btn 
                    @click="register"
                    
                    color="#1e3d59"
                    dark>
                        Register
                </v-btn>
            </base-card>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import BaseCard from '@/components/BaseCard'

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
            this.error = null
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
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