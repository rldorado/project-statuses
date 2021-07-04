import { Project } from "@/interfaces/Project";

const createProjectFromServer = (data: any): Project => {
  const { project_id, project_name, color, status } = data;
  if (![project_id, project_name].some((val) => val)) {
    const errorMessage =
      "Error creating <Project> model. Some mandatory props are missing: ";
    console.error(errorMessage, project_id, project_name);
  }
  const project: Project = {
    id: Number(project_id),
    name: String(project_name),
    color: color ?? "",
    status: status ?? "pending",
  };
  return project;
};

export const createProjectsFromServer = (projects: any[]): Project[] => {
  if (!Array.isArray(projects)) {
    console.error("Error creating Projects model");
    return [];
  }
  return projects.map(createProjectFromServer);
};
