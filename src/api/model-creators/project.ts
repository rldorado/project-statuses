import { Project } from "@/interfaces/Project";

const createProjectFromServer = (data: any): Project => {
  const { project_id, project_name, color, status } = data;
  if (![project_id, project_name, status].some((val) => val)) {
    const errorMessage =
      "Error creating <Project> model. Some mandatory props are missing: ";
    console.error(errorMessage, project_id, project_name, status);
  }
  const project: Project = {
    id: Number(project_id),
    name: String(project_name),
    color: color ?? "",
    status: String(status),
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
