import { Task } from "@/interfaces/Task";

const createTaskFromServer = (data: any): Task => {
  const { event_id, event_name, status } = data;
  if (![event_id, event_name, status].some((val) => val)) {
    const errorMessage =
      "Error creating <Task> model. Some mandatory props are missing: ";
    console.error(errorMessage, event_id, event_name);
  }
  const task: Task = {
    id: Number(event_id),
    name: String(event_name),
    status: String(status),
  };
  return task;
};

export const createTasksFromServer = (tasks: any[]): Task[] => {
  if (!Array.isArray(tasks)) {
    console.error("Error creating Tasks model");
    return [];
  }
  return tasks.map(createTaskFromServer);
};
