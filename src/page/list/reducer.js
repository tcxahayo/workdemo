import { GET_VALUE, ADD_VALUE, DELETE, CLICK_EDIT, HANDLE_OK, LOGIN, SETLIST, HANDLE_CANCEL } from '../../store/actionType';
// import { defaultState } from '../../store/reducer';

const defaultState = {      //默认数据
    data: [],
    value: '',
    index: '',
    username: '',
    visible: false,
    list: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        //初始化获取数据库的值
        case SETLIST:{
            console.log(action)
            let newData = Object.assign({}, state, { data: action.values });
            console.log(newData)
            return newData
        }
          //input输入值的改变
          case GET_VALUE: {
            let newData = Object.assign({}, state, { value: action.value });
            return newData
        }
        //点击提交
        case ADD_VALUE: {
            let newData = Object.assign({}, state, { data: [...state.data, state.value], value: '' });
            return newData
        }
        //  点击删除
        case DELETE: {
            let newData = JSON.parse(JSON.stringify(state));
            newData.data.splice(action.index, 1);
            return newData
        }
        //点击修改按钮
        case CLICK_EDIT: {
            let newData = Object.assign({}, state, { value: state.data[action.index], index: action.index, visible: true });
            return newData
        }
        //点击确认修改
        case HANDLE_OK: {
            let newData = JSON.parse(JSON.stringify(state));
            newData.data[newData.index] = newData.value;
            newData.value = '';
            newData.visible = false;
            return newData;
        }
        default:
            return state;
    }
}