import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e998eacf9f08444f8a566e4ec272d4d9",
  },
});

export class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: string | number) => {
    return axiosInstance.get<T>(this.endpoint +  '/' + id).then(res => res.data)
  }
}
