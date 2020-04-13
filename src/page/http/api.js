import axios from 'axios';

export function request(url='', params={}, method = 'GET'){
    return new Promise((resolve, reject)=>{
        //只适用于这些请求方法 'PUT', 'POST', 和 'PATCH',要使用data
        let config = {data:params}
        //`params` 是即将与请求一起发送的 URL 参数
        if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
            config = { params: params }
          }
        axios.request(Object.assign({url, method, params},config)).then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}