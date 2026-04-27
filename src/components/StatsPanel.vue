<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h2>Stats</h2>
    <p>Total Tasks: {{ store.tasks.length }}</p>
    <p>Completed: {{ store.completedTasks.length }}</p>
    <p>Pending: {{ store.pendingTasks.length }}</p>
    <p>High Priority: {{ store.highPriorityTasks.length }}</p>
    <p>Completion Rate: {{ store.completionRate }}%</p>
  </div>
</template>