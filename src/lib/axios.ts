import axios, { type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/store/auth.store";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

apiInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().token; // read from Zustand store
  console.log(token);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiInstance;
