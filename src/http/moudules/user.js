import axios from '../axios'
import qs from 'qs'
/* 
 * 用户管理模块
 */

export const getUser = () => {
    return axios({
        url: '/user',
        method: 'get'
    })
}

// 编辑
export const edit = (params) => {
    return axios({
        url: '/user/user',
        method: 'put',
        params
    })
}

// 新增
export const add = (data) => {
    return axios({
        url: '/user/user',
        method: 'post',
        dataType : 'json',
        data
    })
}

// 删除
export const del = (params) => {
    return axios({
        url: '/user/user',
        method: 'delete',
        paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          },
        params
    })
}
// 分页查询
export const findPage = (params) => {
    return axios({
        url: '/user/all',
        method: 'get',
        params
    })
}