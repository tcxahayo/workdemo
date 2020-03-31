import React, { useState } from 'react';
import "./list.scss";
import { List, Checkbox } from 'antd';
import {CloseCircleOutlined } from '@ant-design/icons';

const ListBox =  (props) => {
    const [check, setCheck] = useState(false);
    //删除
    const clickDele = (index) =>{
       props.delData(index);
    }

    return (
        <div className="listBox">
            <List
                className="listItem"
                dataSource={props.str}
                renderItem={(item,index) => (
                    <List.Item>
                        <Checkbox>                            
                            {item}
                        </Checkbox>
                        <CloseCircleOutlined className="delete" onClick={()=>{clickDele(index)}}/>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default ListBox;