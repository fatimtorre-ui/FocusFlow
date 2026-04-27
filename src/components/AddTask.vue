<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()

const text = ref('')
const priority = ref('low')

const add = () => {
  if (!text.value) return
  store.addTask({ text: text.value, priority: priority.value })
  text.value = ''
}
</script>

<template>
  <div>
    <h2>Add Task</h2>
    <input v-model="text" placeholder="Task..." />
    <select v-model="priority">
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
    <button @click="add">Add</button>
  </div>
</template>