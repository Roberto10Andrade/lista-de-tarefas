<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <div class="form-container">
      <input
        v-model="newTask"
        placeholder="Adicione uma nova tarefa"
        @keyup.enter="addTask"
      >
      <button @click="addTask">Adicionar</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" 
          :key="index"
          :class="{ completed: task.completed }">
        <div class="task-content">
          <label class="checkbox-container">
            <input 
              type="checkbox" 
              :checked="task.completed"
              @change="toggleCompletion(task)"
            >
            <span class="checkmark"></span>
          </label>
          <span class="task-text">{{ task.text }}</span>
        </div>
        <button @click="removeTask(index)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleCompletion(task) {
      task.completed = !task.completed;
    },
  },
  mounted() {
    console.log('App montado com sucesso!');
  },
};
</script>

<style>
@import './App.css';
</style>
