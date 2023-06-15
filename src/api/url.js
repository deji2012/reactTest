import ajax from "./ajax.js";
export const getMd = (data) => {
    return ajax.get("/20220328/etc/ppt/russia/" + data);
  };