import { taskRequest, axiosInstance } from "@/services/axios";
import { ITaskData } from "./types";

const create = async (token: string, data: ITaskData) => {
  try {
    const response = await taskRequest({
      type: "post",
      endpoint: "tasks",
      data,
      token,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

const update = async (token: string, data: ITaskData, code: number) => {
  try {
    const response = await taskRequest({
      type: "put",
      endpoint: `tasks/${code}`,
      data,
      token,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteTask = async (token: string, code: number) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export { create, update, deleteTask };
