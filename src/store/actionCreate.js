import {GET_VALUE, ADD_VALUE, DELETE, CLICK_EDIT, HANDLE_CANCEL, HANDLE_OK } from './actionType';

export const valueAction = (value)=> ({
    type:GET_VALUE,
    value
})

export const addAction = ()=> ({
    type:ADD_VALUE
})

export const deleteAction = (index)=> ({
    type:DELETE,
    index
})

export const editAction = (index) => ({
    type:CLICK_EDIT,
    index 
})

export const cancelAction = ()=> ({
    type:HANDLE_CANCEL
})

export const okAction = ()=> ({
    type:HANDLE_OK
})