import { GetterTree } from "vuex";
import { MainState } from "./types";

const getters: GetterTree<MainState, MainState> = {
  projects: (state: MainState) => state.projects,
  tasks: (state: MainState) => state.tasks,
  statuses: (state: MainState) => state.statuses,
};

export default getters;
