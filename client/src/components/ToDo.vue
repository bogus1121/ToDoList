<template>
    <v-layout>
        <v-flex xs6 offset-xs3 class="mt-16 pt-16">
            <base-card title="Todos">
                <todo-form></todo-form>
                <v-divider/>
                <todos-tab></todos-tab>
            </base-card>
        </v-flex>
    </v-layout>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import TodoForm from '@/components/TodoForm'
import TodosTab from '@/components/TodosTab'

export default {
  components: {
    BaseCard,
    TodoForm,
    TodosTab
  }
}
</script>
