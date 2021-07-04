import httpClientRequest from "./http";
import { createProjectsFromServer } from "@/services/project";
import { createStatusesFromServer } from "@/services/status";
import { Project } from "@/interfaces/Project";
import { Status } from "@/interfaces/Status";

export const fetchAllTasks = async (): Promise<any> => {
  try {
    const { data } = await httpClientRequest("tasks/list");
    return data;
  } catch (e) {
    console.error(e);
  }
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

export const fetchStatusesFromElements = async (elements: string[]): Promise<Status[]> => {
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
