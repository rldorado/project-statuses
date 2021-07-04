import { Status } from "@/interfaces/Status";

// NOTE: status_id is wrong in API documentation, it's type is String, not Integer.

const createStatusFromServer = (data: any): Status => {
  const { status_id, status_name, color, is_default } = data;
  if (![status_id, status_name, color].some((val) => val)) {
    const errorMessage =
      "Error creating <Status> model. Some mandatory props are missing: ";
    console.error(errorMessage, status_id, status_name, color);
  }
  const status: Status = {
    id: String(status_id),
    name: String(status_name),
    color: String(color),
    active: is_default ?? false,
  };
  return status;
};

export const createStatusesFromServer = (statuses: any[]): Status[] => {
  if (!Array.isArray(statuses)) {
    console.error("Error creating Statuses model");
    return [];
  }
  return statuses.map(createStatusFromServer);
};
