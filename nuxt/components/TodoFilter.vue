<template>
  <v-row justify="center" align="center">
    <v-col cols="5">
      <v-radio-group row v-model="FilterFlag" label="ラベルでフィルタ">
        <v-radio
          v-for="option in filterFlagOption"
          v-bind:key="option.label"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></v-radio>
      </v-radio-group>
    </v-col>
    <v-col cols="3" v-if="FilterFlag">
      <v-select
        v-model="NowFilter"
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
</template>

<script>
export default {
  name: 'TodoFilter',

  data: () => ({
    filterFlagOption: [
      { value: true, label: 'はい' },
      { value: false, label: 'いいえ' },
    ],
  }),

  computed: {
    labels: function () {
      return this.$store.state.labels
    },

    NowFilter: {
      get() {
        return this.$store.state.NowFilter
      },
      set(value) {
        this.$store.commit('setNowFilter', value)
      },
    },

    FilterFlag: {
      get() {
        return this.$store.state.FilterFlag
      },
      set(value) {
        this.$store.commit('setFilterFlag', value)
      },
    },
  },
}
</script>
