import { BASE_URL } from "../configs/configs";
import axios from "axios";

class HTTPService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get(url, config) {
    return axios.get(url, config);
  }
  delete(url, config) {
    return axios.delete(url, config);
  }

  post(url, data, config) {
    return axios.post(url, data, config);
  }

  patch(url, data, config) {
    return axios.patch(url, data, config);
  }

  put(url, data, config) {
    return axios.put(url, data, config);
  }
}

export default new HTTPService();
