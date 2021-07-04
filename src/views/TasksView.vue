<template>
  <div>
    <h1>Tasks view</h1>
    <div class="container row">
      <dropdown v-for="task in tasks"
        :key="task.id"
        :element="task"
        :selection="task.status"
        :data="taskStatuses"
        @change-selection="changeTaskStatus">
        {{ task.name }}
      </dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import { fetchAllTasks, fetchStatusesFromElements } from "@/api";
import store from "@/store";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  name: "TasksView",
  components: { Dropdown },
  setup() {
    const tasks = computed(() => store.getters.tasks);
    const taskStatuses = computed(() => store.getters.statuses);
    const changeTaskStatus = ({ id, element }: any) => {
      store.dispatch("setTaskStatus", {
        $status: id as string,
        $task: element as Task,
      });
    };

    onMounted(async () => {
      const resultTasks = await fetchAllTasks();
      store.dispatch("setTasksList", resultTasks);
      const resultProjectStatuses = await fetchStatusesFromElements(["tasks"]);
      store.dispatch("setStatusesList", resultProjectStatuses);
    });

    return { tasks, taskStatuses, changeTaskStatus };
  },
});
</script>
