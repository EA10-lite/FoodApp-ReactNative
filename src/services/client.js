import axios from "axios";

axios.defaults.baseURL = 'https://foodgo-server.onrender.com/api';

axios.interceptors.request.use((config) => {
  config.headers["Accept"] = "application/json"; // Set the Accept header
  config.headers["Content-Type"] = "application/json"; // Set the Content-Type header

  // Set referrerPolicy
  config.referrerPolicy = "strict-origin-when-cross-origin";

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;