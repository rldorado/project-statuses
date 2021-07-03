<template>
  <div>
    <h1>Projects view</h1>
    {{ projects }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchAllProjects } from "@/api";

export default defineComponent({
  name: "ProjectsView",
  setup() {
    const projects = ref([]);

    onMounted(async () => {
      const result = await fetchAllProjects();
      projects.value = result;
    });

    return { projects };
  },
});
</script>
