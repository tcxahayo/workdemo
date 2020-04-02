import React from 'react';
import { Input,Button } from 'antd';
import "./input.scss";

const  InputBox = (props) => {

    return(
        <div className="inputBox"> 
            <Input placeholder="请输入待办事项"  className="input" onChange={props.getValue} value={props.value} />
            <Button type="primary" shape="round" onClick={props.submit} >确定</Button>
        </div>
    )
}

export default InputBox;