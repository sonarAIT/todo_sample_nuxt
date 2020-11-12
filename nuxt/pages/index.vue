<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <TaskForm />
    </v-col>
    <v-col cols="12">
      <Tasks />
    </v-col>
  </v-row>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'
import Tasks from '../components/Tasks.vue'

export default {
  components: {
    TaskForm,
    Tasks,
  },

  created() {
    this.$store.dispatch('getTasks')
    this.$store.dispatch('getLabels')
  },
}
</script>
