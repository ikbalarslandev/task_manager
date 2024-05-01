import { taskRequest, axiosInstance } from "@/services/axios";

const create = async (token: any, data: any) => {
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

const update = async (token: any, data: any, code: any) => {
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

const deleteTask = async (token: any, code: any) => {
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
