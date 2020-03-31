import React, { useState} from 'react';
import { Input,Button,message } from 'antd';
import "./input.scss";

const  InputBox = (props) => {
    const [value, setValue] = useState();
    //获取input输入值
   const changeValue = (e) => {
       setValue(e.target.value)
    }
    //确定添加
    const submit = () => {
        if(value){
            props.getValue(value);
            setValue();
        }else{
            message.warning('不能为空',2)
        }
    }

    return(
        <div className="inputBox"> 
            <Input placeholder="请输入待办事项"  className="input" onChange={changeValue} value={value} />
            <Button type="primary" shape="round" onClick={submit} >确定</Button>
        </div>
    )
}

export default InputBox;