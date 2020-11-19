<template>
  <v-row>
    <Task v-for="task in tasks" v-bind:key="task.id" v-bind:task="task" />
  </v-row>
</template>

<script>
import Task from './Task.vue'

export default {
  name: 'Tasks',

  components: {
    Task,
  },

  computed: {
    tasks: function () {
      if (this.$store.state.FilterFlag) {
        return this.$store.state.tasks.filter(
          (task) => task.label === this.$store.state.NowFilter
        )
      }
      return this.$store.state.tasks
    },
  },
}
</script>
