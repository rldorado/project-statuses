<template>
  <div>
    <h1>Projects view</h1>
    <div class="container row">
      <dropdown
        v-for="project in projects"
        :key="project.id"
        :element="project"
        :selection="project.status"
        :data="projectStatuses"
        @change-selection="changeProjectStatus">
        {{ project.name }}
      </dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { fetchAllProjects, fetchStatusesFromElements } from "@/api";
import Dropdown from "@/components/Dropdown.vue";
import store from "@/store";
import { Project } from "@/interfaces/Project";

export default defineComponent({
  name: "ProjectsView",
  components: { Dropdown },
  setup() {
    const projects = computed(() => store.getters.projects);
    const projectStatuses = computed(() => store.getters.statuses);
    const changeProjectStatus = ({ id, element }: any) => {
      store.dispatch("setProjectStatus", {
        $status: id as string,
        $project: element as Project,
      });
    };

    onMounted(async () => {
      const resultProjects = await fetchAllProjects();
      store.dispatch("setProjectsList", resultProjects);
      const resultProjectStatuses = await fetchStatusesFromElements(["projects"]);
      store.dispatch("setStatusesList", resultProjectStatuses);
    });

    return { projects, projectStatuses, changeProjectStatus };
  },
});
</script>
