import httpClientRequest from "./http";

export const fetchAllTasks = async (): Promise<any> => {
  try {
    const { data } = await httpClientRequest("tasks/list");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchAllProjects = async (): Promise<any> => {
  try {
    const { data } = await httpClientRequest("projects/list");
    return data;
  } catch (e) {
    console.error(e);
  }
}
