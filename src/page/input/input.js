import React, { useState} from 'react';
import { Input,Button } from 'antd';
import "./input.scss";

const  InputBox = (props) => {
    const [value, setValue] = useState();
    //获取input输入值
   const changeValue = (e) => {
       setValue(e.target.value)
    }
    //确定添加
    const submit = () => {
        props.getValue(value);
        setValue();
    }

    return(
        <div className="inputBox"> 
            <Input placeholder="请输入待办事项"  className="input" onChange={changeValue} value={value} />
            <Button type="primary" shape="round" onClick={submit} >确定</Button>
        </div>
    )
}

export default InputBox;