import axios, { AxiosRequestConfig } from "axios";

import.meta.env.PROD;

// baseURL needs to be set to backend port when running in dev
const environmentConfig: AxiosRequestConfig = import.meta.env.DEV
  ? {
      baseURL: `http://localhost:${import.meta.env.VITE_DEV_BACKEND_PORT}/api`,
    }
  : {};

const instance = axios.create({
  ...environmentConfig,
});

// interceptor to check if jwt exists and adds to header
instance.interceptors.request.use((config) => {
  const userToken = localStorage.getItem("user.sid");
  let headers = config.headers;
  if (userToken) {
    headers = { ...headers, authorization: userToken };
  }
  return { ...config, headers };
});

export const { get, put, patch, post, delete: destroy } = instance;
