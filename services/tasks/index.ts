import { taskRequest, axiosInstance } from "@/services/axios";

// const create = async (token: any, data: any) => {
//   await taskRequest({
//     type: "post",
//     endpoint: "tasks",
//     data: { ...data },
//     token: token,
//   });
// };
const create = async (token: any, data: any) => {
  await axiosInstance.post(
    `tasks`,
    { ...data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const update = async (token: any, data: any, code: any) => {
  await taskRequest({
    type: "put",
    endpoint: `tasks/${code}`,
    data: { ...data },
    token: token,
  });
};

export { create, update };
