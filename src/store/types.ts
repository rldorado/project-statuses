import { Project } from "@/interfaces/Project";
import { Status } from "@/interfaces/Status";
import { Task } from "@/interfaces/Task";

export interface MainState {
  projects: Project[];
  tasks: Task[];
  statuses: Status[];
}

export default {
  SET_PROJECTS_LIST: "SET_PROJECTS_LIST",
  SET_TASKS_LIST: "SET_TASKS_LIST",
  SET_STATUSES_LIST: "SET_STATUSES_LIST",
  SET_PROJECT_STATUS: "SET_PROJECT_STATUS",
  SET_TASK_STATUS: "SET_TASK_STATUS",
};
