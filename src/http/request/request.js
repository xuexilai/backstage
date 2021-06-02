import axios from "axios";

// let baseUrl = "localhost:8080";
let baseUrl = "https://www.boaoholiday.com";

/**
 * @description: axios默认选项
 * @author: xue xi lai
 * @param {*}
 * @return {*}
 */
axios.defaults.timeout = 5000;

/**
 * @description: 请求拦截
 * @author: xue xi lai
 * @param {*}
 * @return {*}
 */
let token;
axios.interceptors.request.use((config) => {
  token = sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  console.log("加载动画！！");
  return config;
}),
  (err) => {
    return Promise.reject(err);
  };

/**响应拦截器
 * @description:
 * @author: xue xi lai
 * @param {*}
 * @return {*}
 */
axios.interceptors.response.use((response) => {
  if (response.data == 400) {
    console.log("执行一堆巴拉巴拉");
  }
  console.log("去掉加载动画！");
  return response.data;
}),
  (err) => {
    return Promise.reject(err);
  };

/**
 * @description: GET请求
 * @author: xue xi lai
 * @param {URL,params}
 * @return {response}
 */

export const Get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params: params,
      })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * @description: POST请求
 * @author: xue xi lai
 * @param {URL,params}
 * @return {response}
 */

export const Post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, {
        params: params,
      })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


