/*
 * @Author: limscript
 * @Date: 2021-01-17 16:11:56
 * @LastEditTime: 2021-02-13 21:43:33
 * @LastEditors: limscript
 * @Description: 菜单相关请求模块
 */
import request from '@/utils/request.ts'

export const createOrUpdateMenu = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data
  })
}

export const getEditMenuInfo = (id: string | number = -1) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  })
}

export const getAllMenus = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getAll'
  })
}

export const deleteMenu = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/boss/menu/${id}`
  })
}

export const getMenuNodeList = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getMenuNodeList'
  })
}

export const allocateRoleMenus = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data
  })
}

export const getRoleMenus = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: { // axios 会把 params 转换为 key=value&key=value 的数据格式放到 url 后面(以?分割)
      roleId
    }
  })
}
