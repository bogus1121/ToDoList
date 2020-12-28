<template>
    <form @submit.prevent="submit">
        <v-col
          md="10"
        >
            <v-layout class="align-center">
                <v-text-field
                label="Outlined"
                outlined
                hide-details
                dense
                ></v-text-field>
                <v-btn
                    class="mr-4"
                    type="submit"
                >
                    submit
                </v-btn>
            </v-layout>
        </v-col>
      <!-- <v-btn @click="clear">
        clear
      </v-btn> -->
    </form>
</template>

<script>
export default {
    data () {
        return {
            todo: ['']
        }
    },
    methods: {
        submit () {
            todo.push
        },
        clear () {

        }
    }
}
</script>