import { request } from "@/services/axios";

const login = async (userData: any) => {
  return await request({
    type: "post",
    endpoint: "auth/login",
    payload: userData,
  });
};

const register = async (userData: any) => {
  return await request({
    type: "post",
    endpoint: "auth/register",
    payload: userData,
  });
};

const profile = async (token: any) => {
  return await request({
    type: "get",
    endpoint: "auth/profile",
    payload: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};

export { login, register, profile };
