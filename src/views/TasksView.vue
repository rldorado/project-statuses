<template>
  <div>
    <h1>Tasks view</h1>
    {{ tasks }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchAllTasks } from "@/api";

export default defineComponent({
  name: "TasksView",
  setup() {
    const tasks = ref([]);

    onMounted(async () => {
      const result = await fetchAllTasks();
      tasks.value = result;
    });

    return { tasks };
  },
});
</script>
