import React,{Component} from 'react';
import { Input,Button } from 'antd';
import "./input.scss";
import { connect } from 'react-redux';
import { valueAction,addAction } from '../../store/actionCreate';

class InputBox extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {value, setValue, submit} = this.props;
        return(
             <div className="inputBox"> 
             <Input placeholder="请输入待办事项"  className="input" value={value} onChange={setValue} />
             <Button type="primary" shape="round" onClick={submit}  >确定</Button>
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
      setValue: (e) => {
        const action = valueAction(e.target.value)
        dispatch(action)
      },
        //确定添加
    submit: () => {
        const action = addAction();
        dispatch(action)
      },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(InputBox);