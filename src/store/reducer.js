import {GET_VALUE , ADD_VALUE, DELETE, CLICK_EDIT , HANDLE_OK, LOGIN} from './actionType';

const defaultState = {      //默认数据
    data: ['星期一', '星期二'],
    value: '',
    index: '',
    username:''
}
export default (state = defaultState, action) => {
    //input输入值的改变
    if(action.type === GET_VALUE ){
        let newData = JSON.parse(JSON.stringify(state));
        newData.value = action.value;
        return newData;
    }
    //点击提交
    if(action.type === ADD_VALUE){
        let newData = JSON.parse(JSON.stringify(state));
        newData.data = [...newData.data, newData.value];
        newData.value = '';
        return newData;
    }
    //点击删除
    if(action.type === DELETE){
        let newData = JSON.parse(JSON.stringify(state));
        newData.data.splice(action.index,1);
        return newData;
    }
    //点击修改按钮
    if(action.type === CLICK_EDIT){
        let newData = JSON.parse(JSON.stringify(state));
        newData.value = newData.data[action.index];
        newData.index = action.index;
        return newData
    } 
    //点击确认修改
    if(action.type === HANDLE_OK){
        let newData = JSON.parse(JSON.stringify(state));
        newData.data[newData.index] = newData.value;
        newData.value = '';
        return newData;
    }
    //点击登陆
    if(action.type === LOGIN){
        let newData = JSON.parse(JSON.stringify(state));
        newData.username = action.values.username;
        return newData;
    }
    return state
}