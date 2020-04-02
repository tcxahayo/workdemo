import React, { Component } from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import { Link, Route } from "react-router-dom";
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { username} = this.props
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
          <div>
          <div className="btu">
            <Link to='/inputBox' className="btu1">输入</Link>
            <Link to='/listBox' className="btu1">结果</Link>
          </div>
            <div className="btuContent">
              <Route path='/inputBox' component={InputBox} />
              <Route path='/listBox' component={ListBox} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//将store里面的值映射为props
const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps, null)(App);
