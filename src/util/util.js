/*
 * @Description: 
 * @Author: xue xi lai
 * @Date: 2021-05-20 10:43:33
 * @LastEditors: lhl
 * @LastEditTime: 2021-05-20 11:27:21
 */
export const formatDate = date => {
  let Y = date.getFullYear();
  let M = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1+'';
  let D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate()+'';
  return (Y+M+D);
}