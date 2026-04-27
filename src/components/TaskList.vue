<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h2>Tasks</h2>

    <ul>
      <li v-for="task in store.tasks" :key="task.id">
        <span
          :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
        >
          {{ task.text }} ({{ task.priority }})
        </span>

        <button @click="store.toggleTask(task.id)">
          ✔
        </button>

        <button @click="store.deleteTask(task.id)">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>