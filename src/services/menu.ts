/*
 * @Author: limscript
 * @Date: 2021-01-17 16:11:56
 * @LastEditTime: 2021-01-17 17:06:39
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

export const getEditMenuInfo = (id = -1) => {
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
