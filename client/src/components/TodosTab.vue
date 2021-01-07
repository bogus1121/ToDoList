<template>
    <v-layout>
        <v-simple-table
            fixed-header
            height="300px"
        >
            <thead>
                <tr>
                    <th class="text-left">
                        Nr.
                    </th>
                    <th class="text-center">
                        To Do:
                    </th>
                    <th class="text-left">
                        Priority
                    </th>
                    <th class="text-left">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="todo in todos"
                :key="todo.id"
                >
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.taskName }}</td>
                    <td>{{ todo.priority }}</td>
                    <td>
                        <v-btn
                            x-small
                            fab
                            outlined
                            color="success"
                            >
                        <v-icon>
                            mdi-check-underline
                        </v-icon>
                        </v-btn>
                        <v-col cols="auto">
                            <v-dialog transition="dialog-bottom-transition" max-width="600">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    x-small
                                    fab
                                    outlined
                                    color="primary"
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </template>
                                <template v-slot:default="dialog">
                                    <v-card>
                                        <v-toolbar color="primary" dark>Edit todo</v-toolbar>
                                        <v-card-text>
                                            <v-layout class="align-center mt-10">
                                                <v-text-field
                                                    v-model="todo.taskName"
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
                                        </v-card-text>
                                        <v-card-actions class="justify-end">
                                            <v-btn text @click="dialog.value = false">Close</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </v-col>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-layout>
</template>

<script>
import TodosService from '../services/TodosService'

export default {
    data () {
            return {
                    todos: null
        }
    },
    methods: {
        async remove () {
            try {
                await TodosService.remove(this.todo)
            } catch (err) {
                console.log(err);
            }
            this.todo.task = null,
            this.todo.priority = 1
        },
        async loadTodos () {
            this.todos = await TodosService.index()
        }
    },
    async mounted () {
        await loadTodos()
    }
}
</script>