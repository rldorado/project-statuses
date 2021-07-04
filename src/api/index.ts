import httpClientRequest from "./http";
import { createTasksFromServer } from "@/api/model-creators/task";
import { createProjectsFromServer } from "@/api/model-creators/project";
import { createStatusesFromServer } from "@/api/model-creators/status";
import { Task } from "@/interfaces/Task";
import { Project } from "@/interfaces/Project";
import { Status } from "@/interfaces/Status";

export const fetchAllTasks = async (): Promise<Task[]> => {
  try {
    const { data } = await httpClientRequest("tasks/list");
    return createTasksFromServer(data);
  } catch (e) {
    console.error(e);
  }
  return createTasksFromServer([]);
};

export const fetchAllProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await httpClientRequest("projects/list");
    return createProjectsFromServer(data);
  } catch (e) {
    console.error(e);
  }
  return createProjectsFromServer([]);
};

export const fetchStatusesFromElements = async (
  elements: string[]
): Promise<Status[]> => {
  try {
    const { data } = await httpClientRequest("statuses/list", {
      filter: {
        module: elements,
      },
    });
    return createStatusesFromServer(data);
  } catch (e) {
    console.error(e);
  }
  return createStatusesFromServer([]);
};
