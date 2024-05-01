import { request } from "@/services/axios";

const boards = async (token: any) => {
  return await request({
    type: "get",
    endpoint: "boards",
    payload: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};

export { boards };
