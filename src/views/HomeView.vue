<template>
  <div class="home">
    <v-row>
      <v-col cols="4" class="ml-auto mt-2">
        <AddTodoModal />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mx-auto my-6">
        <TodosCard />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AddTodoModal from "../components/todos/AddTodoModal.vue";
import TodosCard from "../components/todos/TodosCard.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    AddTodoModal,
    TodosCard,
  },
});
</script>
<style lang="scss" scoped>
.home {
  background-image: url("@/assets/images/background.jpg");
  height: 100vh;
}
</style>
