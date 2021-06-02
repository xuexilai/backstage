import { Get } from "../request/request";

//登录获取token
export const loginToken = (params) => {
  return Get("/webapi/h5/token", params);
};
