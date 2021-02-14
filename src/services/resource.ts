/*
 * @Author: limscript
 * @Date: 2021-01-20 16:11:56
 * @LastEditTime: 2021-02-13 22:16:08
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

export const getAllResources = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/getAll'
  })
}

export const allocateRoleResources = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/allocateRoleResources',
    data
  })
}

export const getRoleResources = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/resource/getRoleResources',
    params: {
      roleId
    }
  })
}
