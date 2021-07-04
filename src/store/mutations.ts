import { Project } from "@/interfaces/Project";
import { Status } from "@/interfaces/Status";
import { Task } from "@/interfaces/Task";
import { MutationTree } from "vuex";
import { MainState } from "./types";

const mutations: MutationTree<MainState> = {
  SET_PROJECTS_LIST(state: MainState, $payload: Project[]) {
    state.projects = $payload;
  },
  SET_TASKS_LIST(state: MainState, $payload: Task[]) {
    state.tasks = $payload;
  },
  SET_STATUSES_LIST(state: MainState, $payload: Status[]) {
    state.statuses = $payload;
  },
  SET_PROJECT_STATUS(
    state: MainState,
    $payload: { $status: string; $project: Project }
  ) {
    state.projects.map((project) => {
      if (project.id === $payload.$project.id) {
        project.status = $payload.$status;
      }
    });
  },
  SET_TASK_STATUS(
    state: MainState,
    $payload: { $status: string; $task: Task }
  ) {
    state.tasks.map((task) => {
      if (task.id === $payload.$task.id) {
        task.status = $payload.$status;
      }
    });
  },
};

export default mutations;
