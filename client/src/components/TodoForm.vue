<template>
    <form @submit.prevent="addTodo" v-on:keyup.enter="addTodo">
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
            ></v-slider>
            <v-alert type="warning" v-if="fieldFilled">
                Please, write some todo...
            </v-alert>
        </v-col>
    </form>
</template>

<script>
import TodosService from '@/services/TodosService'

export default {
    emits: ['task-created'],
    data () {
        return {
            todo: {
                task: '',
                priority: 1,
                userId: this.$store.state.user.id
            },
            fieldFilled: false,
        }
    },
    methods: {
        async addTodo () {
                try {
                    const task = await TodosService.post(this.todo)
                    this.$emit('task-created', task)
                } catch (err) {
                    console.log(err);
                }
                this.todo.task = '',
                this.todo.priority = 1
            }
        },
    }
</script>
