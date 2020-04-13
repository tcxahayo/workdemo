import axios from 'axios';

export function request(url, params){
    return new Promise((resolve, reject)=>{
        axios.get(url, params).then(function(response){
            resolve(response.data)
        })
        .catch(function(err){
            reject(err)
        })
    })
}