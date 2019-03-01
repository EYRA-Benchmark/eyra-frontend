import axios from "axios";
import { settings } from "../settings";

const axiosInstance = axios.create({
  // baseURL: "https://api.staging.eyrabenchmark.net/api/v1/"
  baseURL: "https://api.tom.dev.eyrabenchmark.net/api/v1/"
  // baseURL: settings.backendURL
});

export default axiosInstance;
