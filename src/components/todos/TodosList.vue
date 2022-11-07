<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "../../stores/todos";

const isEditing = ref(false);

const todosStore = useTodosStore();

function deleteTodo(id: string) {
  todosStore.deleteTodo(id);
}

function toggleStatus(id: string) {
  todosStore.toggleStatus(id);
}
</script>
<template>
  <p class="text-center" v-if="!todosStore.todos.length">
    Look at you! No Todos so far...
  </p>
  <v-list lines="one">
    <v-list-item>
      <v-checkbox
        v-for="item in todosStore.todos"
        :key="item.id"
        :label="item.title"
        :hide-details="true"
        :model-value="item.isCompleted"
        @click="toggleStatus(item.id)"
      >
        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-close"
            variant="text"
            @click="deleteTodo(item.id)"
          ></v-btn>
        </template>
      </v-checkbox>
    </v-list-item>
  </v-list>
</template>
