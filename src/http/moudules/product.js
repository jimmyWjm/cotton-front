import axios from '../axios'

//取得实时控制状态数据
export const getStatus = (id) => {
    return axios({  
        url: '/proLine/realtime2/'+id,
        method: 'get'
    })
}

//提交控制数据
export const updateCmd = (data) => {
    return axios({  
        url: '/proLine/cmd',
        method: 'post',
        dataType: 'json',
        data
    })
}
//取得实时数据
export const updateSt = (id) => {
    return axios({  
        url: '/proLine/realtime1/'+id,
        method: 'get'

    })
}

//取得24小时开关机状态
export const getOnOffSt = (id) => {
    return axios({  
        url: '/proLine/OnOff/'+id,
        method: 'get'

    })
}

export const getProductReal = (pro_id) => {
    return axios({
        url:'/proLine/productReal/'+pro_id,
        method:'get'
    })
}