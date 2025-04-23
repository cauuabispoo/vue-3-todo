<template>
    <v-text-field 
    clearable 
    label="Add Task" 
    :rules="rules"
    @keyup.enter="taskStore.addTask" 
    v-model="taskStore.titleTaskCreating"
    ></v-text-field>

    <ListTasks></ListTasks>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './ListTasks.vue';

import { useTaskStore } from '@/stores/task.js'

const taskStore = useTaskStore()

const rules = [
    value => {
      if (value && value.length >= 5) return true
      return 'You must enter Task title with more then 5 characters.'
    },
];

onMounted(() => {
    taskStore.getTasks();
})
</script>