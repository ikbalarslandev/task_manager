import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.management.parse25proje.link/api";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const getToken = () => {
  return Cookies.get("userToken");
};

const clearToken = () => {
  Cookies.remove("userToken");
};

const request = (credentials: {
  type: "get" | "put" | "post" | "delete";
  endpoint: string;
  payload?: any;
}) => {
  return axiosInstance[credentials.type](
    `/${credentials.endpoint}`,
    credentials.payload
  );
};

const taskRequest = (credentials: {
  type: "get" | "put" | "post" | "delete";
  endpoint: string;
  data?: any;
  token: any;
}) => {
  return axiosInstance[credentials.type](
    `${credentials.endpoint}`,
    { ...credentials.data },
    {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    }
  );
};

export { request, taskRequest, getToken, clearToken, axiosInstance };
