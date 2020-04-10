import { GET_VALUE, ADD_VALUE } from '../../store/actionType';
import {defaultState} from '../../store/reducer';
// const defaultState = {      //默认数据
//     data: ['星期一', '星期二'],
//     value: '',
//     index: '',
//     username: '',
//     visible: false,
//     list: []
// }

export default (state = defaultState, action) => {
    switch (action.type) {
        //input输入值的改变
        case GET_VALUE: {
            let newData = Object.assign({}, state, { value: action.value });
            console.log(action.value)
            return newData
        }
        //点击提交
        case ADD_VALUE: {
            let newData = Object.assign({}, state, { data: [...state.data, state.value], value: '' });
            console.log(newData)
            return newData
        }
        default:
            return state;
    }
}