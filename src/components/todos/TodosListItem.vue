<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "../../stores/todos";

const todosStore = useTodosStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const itemName = ref(props.item.name);

const isEditing = ref(false);

function deleteTodo(id: string) {
  todosStore.deleteTodo(id);
}

function toggleStatus(id: string) {
  todosStore.toggleStatus(id);
}

function editTask(id: string) {
  todosStore.editTask(id, itemName);
  isEditing.value = false;
}

// const todos = isCompleted ? todosStore.completedTodos : todosStore.todos;
</script>
<template>
  <v-list-item>
    <v-checkbox
      :hide-details="true"
      :model-value="item.isCompleted"
      @click="toggleStatus(item.id)"
    >
      <template v-slot:label>
        <v-text-field
          @click="isEditing = true"
          :value="itemName"
          @input="$emit('input')"
          :readonly="!isEditing"
        >
        </v-text-field>
      </template>
    </v-checkbox>
    <template v-slot:append>
      <v-btn
        color="grey-lighten-1"
        icon="mdi-close"
        variant="text"
        @click="deleteTodo(item.id)"
      ></v-btn>
    </template>
  </v-list-item>
</template>
