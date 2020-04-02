import React, { Component } from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import { Link } from "react-router-dom";
import store from '../store/index';
import { connect } from 'react-redux';
import { valueAction, addAction, deleteAction, editAction, cancelAction, okAction } from '../store/actionCreate';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, value, visible,username, setValue, submit, delData, clickEdit, handleCancel,handleOk } = this.props
    return (
      <div className="App">
        <div className="content">
          <div className="title">To-Do-List
          {
            (username && (
            <span className="loginTxt">你好 {username}</span>
            )) || (!username && (
              <Link to='/login' className="loginTxt">【登陆】</Link>
            ))
          }
          </div>
          <InputBox getValue={setValue} submit={submit} value={value} />
          <ListBox
            visible={visible}
            str={data}
            delData={delData}
            handleOk={handleOk}
            handleCancel={handleCancel}
            clickEdit={clickEdit}
            editValue={value}
            changeValue={setValue}
          />
        </div>
      </div>
    );
  }
}

//将store里面的值映射为props
const mapStateToProps = (state) => {
  return {
    value: state.value,
    visible: state.visible,
    data: state.data,
    username:state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //删除数据
    delData: (index) => {
      const action = deleteAction(index);
      dispatch(action);
    },
    //确定添加
    submit: () => {
      const action = addAction();
      dispatch(action)
    },
    //获取输入框的值
    setValue: (e) => {
      const action = valueAction(e.target.value)
      dispatch(action)
    },
    //点击修改
    clickEdit: (index) => {
      const action = editAction(index);
      store.dispatch(action);
    },
    //取消修改
    handleCancel: () => {
      const action = cancelAction();
      store.dispatch(action);
    },
    //修改框
    handleOk: () => {
      const action = okAction();
      store.dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
