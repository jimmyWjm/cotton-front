import axios from '../axios'



export const getMarkers = () => {
    return axios({
        url: '/device/markerList',
        method: 'get'
    })
}

export const getRealDataValue = (dev_id) =>{
    return  axios({
        url:'/device/real/simple/'+dev_id,
        method: 'get'
    })
}

export const getMarker = (dev_id) => {
    return axios({
        url: '/device/real/detail/'+dev_id,
        method: 'get',
    })
}

export const getSimpleDeviceList = ()=>{
    return axios({
        url:'device/simpleDeviceList',
        method:'get',
    })
}

export const getChartData = (data)=>{
    return axios({
        url:'device/chart',
        method:'post',
        header:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export const getDeviceInfo = (dev_id) =>{
    return  axios({
        url:'/device/dev_info/'+dev_id,
        method: 'get'
    })
}

export const getDeviceList = (data) =>{
    return axios({
        url:'/device/deviceList',
        method: 'post',
        header:{
            'Content-Type': 'application/json'
        },
        data
    })
}



export const getRunningStatus = () => {
    return axios({
        url: '/device/runningStatus/all',
        method: 'get',
    })
}


export const getOnOffSt = (dev_id,days) => {
    return axios({
        url: '/device/onOffSt/'+dev_id+'/'+days,
        method: 'get'
    })
}




export const getWeather = () =>{
    return axios({
        url:'weather',
        method:'get'
    })
}

export const getFaultLogList = (params) =>{
    return axios({
        url:'/device/faultLog/list',
        method: 'get',
        params
    })
}

export const getMaintainList = (params) =>{
    return axios({
        url:'/device/maintain/list',
        method: 'get',
        params
    })
}

export const getMarkerHistory = (data) =>{
    return axios({
        url:'/device/history/route',
        method: 'post',
        header:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export const getDeviceHistory = (data) =>{
    return axios({
        url:'/device/history/data',
        method:'post',
        header:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export const getDeviceRawData = (data) =>{
    return axios({
        url:'/device/history/raw_data',
        method:'post',
        header:{
            'Content-Type': 'application/json'
        },
        data
    })
}