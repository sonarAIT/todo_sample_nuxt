<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-card>
        <v-card-title> タスクの作成 </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="name" v-model="name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  auto-grow
                  v-model="description"
                  label="description"
                >
                </v-textarea>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="label"
                  :items="labels"
                  :menu-props="{ maxHeight: '400' }"
                  item-text="labelText"
                  item-value="id"
                  label="Label"
                  hint="select label"
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green lighten-2" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TaskForm',
  data: () => ({
    name: '',
    description: '',
    label: 0,
  }),
  methods: {
    submit: function () {
      let date = new Date()
      let nextID
      if (this.$store.state.tasks == 0) {
        nextID = 1
      } else {
        nextID = this.$store.state.tasks.slice(-1)[0].id + 1
      }
      let task = {
        id: nextID,
        name: this.name,
        description: this.description,
        label: this.label,
        submitTime:
          date.toISOString().substr(0, 10) +
          ' ' +
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds(),
      }
      this.$store.dispatch('addTask', task)
    },
  },
  computed: {
    labels: function () {
      return this.$store.state.labels
    },
  },
}
</script>
