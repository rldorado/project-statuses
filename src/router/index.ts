import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProjectsView from "@/views/ProjectsView.vue";
import TasksView from "@/views/TasksView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "projects" },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
