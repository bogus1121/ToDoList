<template>
    <form @submit.prevent="addTodo">
        <v-col
          md="10"
        >
            <v-layout class="align-center">
                <v-text-field
                v-model="todo.task"
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
import TodosService from '@/services/TodosService'

export default {
    data () {
        return {
            todo: {
                task: null,
                priority: 5,
            }
        }
    },
    methods: {
        async addTodo () {
            try {
                await TodosService.post(this.todo)
            } catch (err) {
                console.log(err);
            }
        },
        // clear () {}
    },
}
</script>