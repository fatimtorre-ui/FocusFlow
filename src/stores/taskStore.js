import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: []
  }),

  getters: {
    completedTasks: (state) =>
      state.tasks.filter(task => task.completed),

    pendingTasks: (state) =>
      state.tasks.filter(task => !task.completed),

    highPriorityTasks: (state) =>
      state.tasks.filter(task => task.priority === 'high'),

    completionRate: (state) => {
      if (state.tasks.length === 0) return 0
      return (
        state.tasks.filter(t => t.completed).length /
        state.tasks.length * 100
      ).toFixed(0)
    }
  },

  actions: {
    addTask(task) {
      this.tasks.push({
        id: Date.now(),
        text: task.text,
        priority: task.priority,
        completed: false
      })
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})