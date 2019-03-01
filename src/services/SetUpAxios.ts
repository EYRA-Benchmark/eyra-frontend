import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.tom.dev.eyrabenchmark.net/api/v1/"
});

export default axiosInstance;
