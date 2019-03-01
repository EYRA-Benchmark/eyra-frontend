import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://api.staging.eyrabenchmark.net/api/v1/"
  baseURL: "https://api.tom.dev.eyrabenchmark.net/api/v1/"
});

export default axiosInstance;
