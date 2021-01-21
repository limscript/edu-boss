/*
 * @Author: limscript
 * @Date: 2021-01-20 16:11:56
 * @LastEditTime: 2021-01-20 20:53:32
 * @LastEditors: limscript
 * @Description: 资源相关请求模块
 */
import request from '@/utils/request.ts'

export const getResourcePages = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export const getResourceCategories = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/category/getAll'
  })
}
