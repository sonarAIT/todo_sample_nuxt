<template>
  <v-container>
    <TaskForm />
    <TodoFilter />
    <Tasks />
  </v-container>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'
import Tasks from '../components/Tasks.vue'
import TodoFilter from '../components/TodoFilter.vue'

export default {
  components: {
    TaskForm,
    Tasks,
    TodoFilter,
  },

  created() {
    this.$store.dispatch('getTasks')
    this.$store.dispatch('getLabels')
  },
}
</script>
