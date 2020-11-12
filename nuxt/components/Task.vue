<template>
  <v-col cols="12">
    <v-card>
      <v-card-title class="justify-center"
        >{{ task.id }}: {{ task.name }}</v-card-title
      >
      <v-card-subtitle class="text-center">
        <div>{{ task.submitTime }}</div>
        <div>{{ labels[task.label].labelText }}</div>
      </v-card-subtitle>
      <v-card-text class="text-center">
        <div>{{ task.description }}</div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="complete">完了</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  methods: {
    complete: function () {
      this.$store.dispatch('completeTask', this.task.id)
    },
  },
  computed: {
    labels: function () {
      return this.$store.state.labels
    },
  },
}
</script>
