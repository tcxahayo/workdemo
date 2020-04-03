import React,{Component} from 'react';
import { Input,Button } from 'antd';
import "./input.scss";
import { connect } from 'react-redux';
import { valueAction,addAction } from '../../store/actionCreate';
import {bindActionCreators} from 'redux';

class InputBox extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {value, addAction, valueAction} = this.props;
        return(
             <div className="inputBox"> 
             <Input placeholder="请输入待办事项"  className="input" value={value} onChange={valueAction} />
             <Button type="primary" shape="round" onClick={addAction}  >确定</Button>
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      value: state.value
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    //获取输入框的值
    valueAction:bindActionCreators(valueAction,dispatch),
    //确定添加
    addAction:bindActionCreators(addAction,dispatch)
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(InputBox);