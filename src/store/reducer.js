
import { combineReducers } from 'redux';
import inputReducer from '../page/input/reducer';
import listRecuder from '../page/list/reducer';

export const defaultState = {      //默认数据
    data: ['星期一', '星期二'],
    value: '',
    index: '',
    username: '',
    visible: false,
    list: []
}


const reducer = combineReducers({
    // inputReducer,
    listRecuder
})

export default reducer;
// export default (state = defaultState, action) => {
//     switch (action.type) {
//         case SETLIST: {
//             //试用中间件
//             let newData = Object.assign({}, state, { list: action.values });
//             return newData;
//         }
//         //input输入值的改变
//         case GET_VALUE: {
//             let newData = Object.assign({}, state, { value: action.value });
//             return newData
//         }
//         //点击提交
//         case ADD_VALUE: {
//             let newData = Object.assign({}, state, { data: [...state.data, state.value], value: '' });
//             return newData
//         }
//         //点击删除
//         case DELETE: {
//             let newData = JSON.parse(JSON.stringify(state));
//             newData.data.splice(action.index, 1);
//             return newData
//         }
//         //点击修改按钮
//         case CLICK_EDIT: {
//             let newData = Object.assign({}, state, { value: state.data[action.index], index: action.index, visible: true });
//             return newData
//         }
//         //点击确认修改
//         case HANDLE_OK: {
//             let newData = JSON.parse(JSON.stringify(state));
//             newData.data[newData.index] = newData.value;
//             newData.value = '';
//             newData.visible = false;
//             return newData;
//         }
//         //点击登陆
//         case LOGIN:{
//             let newData = Object.assign({},state,{username:action.values.username});
//             return newData;
//         }

//         default: return state
//     }
// }