<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref, reactive } from "vue";
import { useTodosStore } from "../../stores/todos";
import type { TodoItem } from "../../types";

const dialog = ref(false);

const todo = reactive({
  id: "",
  title: "",
  description: "",
  due: "",
  tags: [],
  priority: "",
  isCompleted: false,
}) as TodoItem;

// const priorityItems =

const todosStore = useTodosStore();

function addTodo() {
  todosStore.addTodo({
    ...todo,
    id: uuidv4(),
  });
  dialog.value = false;
}
</script>
<template>
  <div class="text-center">
    <v-btn color="success" flat>
      Add Todo <v-icon>mdi-plus</v-icon>
      <v-dialog max-width="600px" v-model="dialog" activator="parent">
        <v-card>
          <v-card-title class="text-center"> Add Todo </v-card-title>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Title"
                    v-model="todo.title"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Description"
                    v-model="todo.description"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Due Date"
                    required
                    outlined
                    type="date"
                    v-model="todo.due"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    chips
                    multiple
                    label="Tags"
                    v-model="todo.tags"
                    :items="[]"
                  ></v-combobox>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Priority"
                    v-model="todo.priority"
                    :items="['Low', 'Normal', 'High', 'Urgent']"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn block @click="dialog = false">Close Dialog</v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" block @click="addTodo">Save</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
