import React, { Component } from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import { Link } from "react-router-dom";
import store from '../store/index';
import {connect} from 'react-redux';
import {valueAction, addAction, deleteAction, editAction, cancelAction, okAction} from '../store/actionCreate';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  //修改框
  handleOk = ()=>{
    const action = okAction();
    store.dispatch(action);

  }
  //取消修改
  handleCancel = () => {
   const action = cancelAction();
   store.dispatch(action);
}
//点击修改
clickEdit =(index)=>{
  const action = editAction(index);
  store.dispatch(action);
}

  render() {
    const { data, value , visible } = this.props
    return (
      <div className="App">
        <div className="content">
          <div className="title">To-Do-List<Link to='/login' className="loginTxt">【登陆】</Link></div>
          <InputBox getValue={this.props.setValue} submit={this.props.submit} value={value} />
          <ListBox 
              visible={visible} 
              str={data} 
              delData={this.props.delData} 
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              clickEdit={this.clickEdit}
              editValue={value}
              changeValue={this.props.setValue}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    value: state.value,
    visible:state.visible,
    data:state.data
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    delData: (index) => {
      const action = deleteAction(index);
      dispatch(action);
    },
    submit:()=>{
      const action = addAction();
      dispatch(action)
    },
    setValue: (e) => {
      const action = valueAction(e.target.value)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
