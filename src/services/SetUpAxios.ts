import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.staging.eyrabenchmark.net/api/v1/"
});

export default axiosInstance;
