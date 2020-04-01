import React, { Component } from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import { Link } from "react-router-dom";
import store from '../store/index';
import {valueAction, addAction, deleteAction, editAction, cancelAction, okAction} from '../store/actionCreate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
     //订阅redux的状态
    store.subscribe(this.storeChange)
  }
 
  //store发生改变
  storeChange = ()=> {
    this.setState(
      store.getState()
    )
  }

  //获取输入的input值
  getValue = (e) => {
    const action = valueAction(e.target.value)
    store.dispatch(action)
  }

  //点击提交
  submit = () => {
    const action = addAction();
    store.dispatch(action)
  }

  //删除数据
  delData = (index) => {
    const action = deleteAction(index);
    store.dispatch(action);
  }

  //修改框
  handleOk = ()=>{
    this.delData(this.state.index);
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


  // componentDidMount() {
  //   const data1 = localStorage.getItem('data1');
  //   try {
  //       this.setState({
  //         data:JSON.parse(data1)
  //         // data:data1.split(',')
  //       })
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   console.log(data1)
  // }
  // componentDidUpdate(){
  //   localStorage.setItem('data1',JSON.stringify(this.state.data))
  // }

  render() {
    const { data, value , visible } = this.state
    return (
      <div className="App">
        <div className="content">
          <div className="title">To-Do-List<Link to='/login' className="loginTxt">【登陆】</Link></div>
          <InputBox getValue={this.getValue} submit={this.submit} value={value} />
          <ListBox 
              visible={visible} 
              str={data} 
              delData={this.delData} 
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              clickEdit={this.clickEdit}
              editValue={value}
              changeValue={this.getValue}
          />
        </div>
      </div>
    );
  }
}

export default App;
