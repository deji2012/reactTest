import request from "@/api/request.js";
const ajax = {
  /**
   * @description: get请求方法封装
   * @param {*} url
   * @param {*} params
   * @return {*}
   */
  get(url, params, header) {
    const config = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    if (header) {
      config.headers = header;
    }
    return request.ajaxNormal(config);
  },
  post(url, data, header, obj) {
    let config = {
      method: "post",
      url: url,
    };
    if (data) config.data = data;
    if (header) config.headers = header;
    if (obj) {
      Object.keys(obj).forEach((item) => {
        config[item] = obj[item];
      });
    }
    return request.ajaxNormal(config);
  },
  delete(url, params) {
    const config = {
      method: "delete",
      url: url,
    };
    if (params) config.params = params;
    return request.ajaxNormal(config);
  },
  put(url, data) {
    const config = {
      method: "put",
      url: url,
    };
    if (data) config.data = data;
    return request.ajaxNormal(config);
  },
};
export default ajax;
