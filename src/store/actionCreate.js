import {GET_VALUE, ADD_VALUE, DELETE, CLICK_EDIT, HANDLE_CANCEL, HANDLE_OK, LOGIN, SETLIST } from './actionType';
import axios from 'axios';
import '../mock/mock';
import {request} from '../page/http/api';

//input输入框的值
export const valueAction = (e)=> ({
    type:GET_VALUE,
    value:e.target.value
})

export const addAction = ()=> {
    return (dispatch,getState)=>{
        request('http://localhost/index.php',{type:'add',values:getState().listRecuder.value},'POST').then((res)=>{
            console.log(res);
            dispatch(getListAction())
            dispatch({type:ADD_VALUE})
        })
    }
}
export const deleteAction = (id)=>{
    return (dispatch,getState)=>{
        console.log(id)
        request('http://localhost/index.php',{type:'delete', id:id},'POST').then((res)=>{
            console.log(res)
            dispatch(getListAction())
        })
    }
}
//点击修改按钮
export const editAction = (index,id) => ({
    type:CLICK_EDIT,
    index,
    id 
})
//点击取消
export const cancelAction = ()=> ({
    type:HANDLE_CANCEL
})
export const okAction = ()=>{
    return (dispatch,getState)=>{
        request('http://localhost/index.php',{type:'edit',values:getState().listRecuder.value,id:getState().listRecuder.id}, 'POST').then((res)=>{
            console.log(res)
            dispatch(getListAction())
        })
    }
}
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
    return (dispatch, getState)=>{
        request('http://localhost/index.php',{type:'all'},'GET').then((res)=>{
            console.log(res)
            dispatch(setListAction(res))
        })
    }
}


