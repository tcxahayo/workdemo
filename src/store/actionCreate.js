import {GET_VALUE, ADD_VALUE, DELETE, CLICK_EDIT, HANDLE_CANCEL, HANDLE_OK, LOGIN } from './actionType';

//input输入框的值
export const valueAction = (value)=> ({
    type:GET_VALUE,
    value
})
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