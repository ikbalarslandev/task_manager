import { request } from "@/services/axios";
import { ILoginUserData, IRegisterUserData } from "./types";

const login = async (userData: ILoginUserData) => {
  return await request({
    type: "post",
    endpoint: "auth/login",
    payload: userData,
  });
};

const register = async (userData: IRegisterUserData) => {
  return await request({
    type: "post",
    endpoint: "auth/register",
    payload: userData,
  });
};

const profile = async (token: string) => {
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
