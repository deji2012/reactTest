import axios from "axios";
const ajaxNormal = axios.create({
    baseURL: "/api",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  ajaxNormal.interceptors.request.use(
    (config) => {
        return config;
      // token && (config.headers.Authorization = token);
      // return config;
    },
    (error) => {
      return Promise.error(error);
    }
  );
  ajaxNormal.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
      console.log(error, "error");
    }
  );
export default { ajaxNormal };