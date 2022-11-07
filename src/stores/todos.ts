import { ref, computed } from "vue";

import { defineStore } from "pinia";
import type { TodoItem } from "@/types";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([] as TodoItem[]);

  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.isCompleted)
  );

  function addTodo(todo: TodoItem) {
    todos.value.push(todo);
  }

  function deleteTodo(id: String) {
    const todoIndex = todos.value.findIndex((todo) => todo.id === id);
    todos.value.splice(todoIndex, 1);
  }

  function toggleStatus(id: String) {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  function editTask(id: String, text: String) {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.title = text;
    }
  }

  return { todos, addTodo, completedTodos, deleteTodo, toggleStatus, editTask };
});
