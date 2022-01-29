import { request } from './request'

//毒鸡汤
export const dutang = (data)=>{
  return request({
    url:"https://api.oick.cn/dutang/api.php",
    method:'get',
    data:data
  })
} 

//历史的今天
export const today = (data)=>{
  return request({
    url:"https://api.oick.cn/lishi/api.php",
    method:'get',
    data:data
  })
} 

//二维码生成
export const getCode = (data)=>{
  return request({
    url:"https://api.oick.cn/qrcode/api.php",
    method:'get',
    responseType: 'arraybuffer',
    data:data
  })
} 

//热门视频
export const gethot= (data)=>{
  return request({
    url:"http://baobab.kaiyanapp.com/api/v4/discovery/hot",
    method:'get',
    data:data
  })
} 