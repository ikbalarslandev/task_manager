import { request } from "@/services/axios";

const flags = async (token: any) => {
  return await request({
    type: "get",
    endpoint: "commons/flags",
    payload: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};

export { flags };
