<template>
  <div>
    <h1>Projects view</h1>
    <div class="container flexy-center">
      <dropdown v-for="project in projects" :key="project.id" :data="statuses">
        {{ project.name }}
      </dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchAllProjects, fetchStatusesFromElements } from "@/api";
import { Project } from "@/interfaces/Project";
import Dropdown from "@/helpers/Dropdown.vue";
import { Status } from "@/interfaces/Status";

export default defineComponent({
  name: "ProjectsView",
  components: { Dropdown },
  setup() {
    const projects = ref<Project[]>([]);
    const statuses = ref<Status[]>([]);

    onMounted(async () => {
      const resultProjects = await fetchAllProjects();
      projects.value = resultProjects;
      const resultStatuses = await fetchStatusesFromElements(["projects"]);
      statuses.value = resultStatuses;
    });

    return { projects, statuses };
  },
});
</script>
