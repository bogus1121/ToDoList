<template>
    <form @submit.prevent="addTodo">
        <v-col
          md="10"
        >
            <v-layout class="align-center">
                <v-text-field
                v-model="todo.task"
                label="Type here your todo"
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
            <v-slider
                v-model="todo.priority"
                label="Priority"
                step="1"
                max="5"
                thumb-label
                ticks
            ></v-slider>
        </v-col>
    </form>
</template>

<script>
import TodosService from '@/services/TodosService'

export default {
    data () {
        return {
            todo: {
                task: null,
                priority: 1
            }
        }
    },
    methods: {
        async addTodo () {
            try {
                await TodosService.post(this.todo)
                this.todo = await TodosService.index()
                console.log(this.todo);
            } catch (err) {
                console.log(err);
            }
            this.todo.task = null,
            this.todo.priority = 1
        },
    },
}
</script>