import { Project } from "@/interfaces/Project";
import { Status } from "@/interfaces/Status";
import { Task } from "@/interfaces/Task";
import { ActionTree } from "vuex";
import types, { MainState } from "./types";

const actions: ActionTree<MainState, MainState> = {
  async setProjectsList({ commit }: any, $payload: Project[]) {
    commit(types.SET_PROJECTS_LIST, $payload);
  },
  async setTasksList({ commit }: any, $payload: Task[]) {
    commit(types.SET_TASKS_LIST, $payload);
  },
  async setStatusesList({ commit }: any, $payload: Status[]) {
    commit(types.SET_STATUSES_LIST, $payload);
  },
  async setProjectStatus(
    { commit }: any,
    $payload: { $status: Status; $project: Project }
  ) {
    commit(types.SET_PROJECT_STATUS, $payload);
  },
};

export default actions;
