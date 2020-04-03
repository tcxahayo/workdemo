import {GET_VALUE, ADD_VALUE, DELETE, CLICK_EDIT, HANDLE_CANCEL, HANDLE_OK, LOGIN, SETLIST } from './actionType';
import axios from 'axios';
import '../mock/mock';

//input输入框的值
export const valueAction = (e)=> ({
    type:GET_VALUE,
    value:e.target.value
})
//在input的内容后面加上username
// export const valueAction = (e)=>{
//     return (dispatch,getState)=> {
//         dispatch({type:GET_VALUE,value:e.target.value + '' + getState().username})
//     }
// }
//确定添加
export const addAction = ()=> ({
    type:ADD_VALUE
})
//删除
export const deleteAction = (index)=> ({
    type:DELETE,
    index
})
//点击修改按钮
export const editAction = (index) => ({
    type:CLICK_EDIT,
    index 
})
//点击取消
export const cancelAction = ()=> ({
    type:HANDLE_CANCEL
})
//点击确定修改
export const okAction = ()=> ({
    type:HANDLE_OK
})
//点击登陆
export const loginAction = (values)=>({
    type:LOGIN,
    values
})


export const setListAction = (values)=> ({
    type:SETLIST,
    values
})

//使用中间件，在actions里发请求,让逻辑都在redux里完成
export const getListAction = ()=>{
    return (dispatch,getState)=>{
        axios.get('api/list').then((res)=>{
            const data = res.data.list;
            dispatch(setListAction(data))
        })
        console.log(getState())
    }
}


