<template>
  <div>
    <v-row justify="start" align="center">
      <v-col cols="5">
        <v-radio-group row v-model="FilterFlag" label="ラベルでフィルタ">
          <v-radio
            v-for="option in filterFlagOption"
            v-bind:key="option.id"
            v-bind:value="option.value"
            v-bind:label="option.label"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row v-if="FilterFlag" justify="start" align="center">
      <v-col cols="3">
        <v-select
          v-model="filterIndex"
          :items="labels"
          :menu-props="{ maxHeight: '400' }"
          item-text="labelText"
          item-value="id"
          label="Filter"
          hint="select label"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <Task v-for="task in tasks" v-bind:key="task.id" v-bind:task="task" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  name: 'Tasks',
  data: () => ({
    FilterFlag: false,
    filterIndex: 0,
    filterFlagOption: [
      { value: true, label: 'はい' },
      { value: false, label: 'いいえ' },
    ],
  }),

  components: {
    Task,
  },

  computed: {
    tasks: function () {
      if (this.FilterFlag) {
        return this.$store.state.tasks.filter(
          (task) => task.label === this.filterIndex
        )
      }
      return this.$store.state.tasks
    },
    labels: function () {
      return this.$store.state.labels
    },
  },
}
</script>
