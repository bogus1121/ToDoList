<template>
    <v-layout> 
        <v-flex xs6 offset-xs3 class="mt-16 pt-16">
            <base-card title="Todos">
                <todo-form></todo-form>
                <v-simple-table
                    fixed-header
                    height="300px"
                >
                    <thead>
                        <tr>
                            <th class="text-left">
                                To Do:
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr
                        v-for="item in desserts"
                        :key="item.name"
                        >
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                        </tr> -->
                    </tbody>
                </v-simple-table>
            </base-card>
        </v-flex>
    </v-layout>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import TodoForm from '@/components/TodoForm'


export default {
    components: {
        BaseCard,
        TodoForm
    }
}
</script>