import axios from 'axios'

export const state = () => ({
  tasks: [
    {
      id: 1,
      name: 'タスク読み込みエラー',
      description: 'タスクを読み込めなかった時に出るタスクです',
      submitTime: '2020/01/01 00:00:00',
      label: 2,
    },
  ],
  labels: [
    {
      id: 0,
      labelText: 'none',
    },
    {
      id: 1,
      labelText: 'none',
    },
    {
      id: 2,
      labelText: 'none',
    },
  ],
  NowFilter: 0,
  FilterFlag: false,
})

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  },
  setLabels(state, labelTexts) {
    state.labels = labelTexts
  },
  setNowFilter(state, nowFilter) {
    state.NowFilter = nowFilter
  },
  setFilterFlag(state, FilterFlag) {
    state.FilterFlag = FilterFlag
  },
  addTask(state, task) {
    state.tasks.push(task)
  },
  removeTask(state, index) {
    state.tasks.splice(index, 1)
  },
}

export const actions = {
  async getTasks(context) {
    console.log(process.env.VUE_APP_API_TASKS)
    await axios
      .get(process.env.VUE_APP_API_TASKS)
      .then((res) => {
        context.commit('setTasks', res.data)
        console.log(context.state.tasks)
      })
      .catch(() => {
        console.log('Tasksのgetに失敗しました.')
      })
  },

  async postTasks(context) {
    await axios
      .post(process.env.VUE_APP_API_TASKS, JSON.stringify(context.state.tasks))
      .then(() => {})
      .catch(() => {
        console.log('Tasksのpostに失敗しました.')
      })
  },

  async getLabels(context) {
    await axios
      .get(process.env.VUE_APP_API_LABELS)
      .then((res) => {
        context.commit('setLabels', res.data)
      })
      .catch(() => {
        console.log('Labelsのgetに失敗しました.')
      })
  },

  addTask(context, task) {
    context.commit('addTask', task)
    context.dispatch('postTasks')
  },

  completeTask(context, id) {
    let index = context.state.tasks.findIndex((element) => element.id === id)
    context.commit('removeTask', index)
    context.dispatch('postTasks')
  },
}
