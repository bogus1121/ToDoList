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
                    @click="login" 
                    color="#1e3d59"
                    dark>
                        Register
                </v-btn>
            </base-card>
        </v-flex>
    </v-layout>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {

        }
    },
    components: {
        BaseCard
    }
}
</script>