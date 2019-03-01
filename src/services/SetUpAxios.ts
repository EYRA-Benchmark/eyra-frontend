import axios from 'axios';
import { settings } from '../settings';

const axiosInstance = axios.create({
  baseURL: settings.backendURL
});

export default axiosInstance;
