import React, { useState } from 'react';
import "./list.scss";
import { List, Checkbox, Modal,Input } from 'antd';
import { CloseCircleOutlined, FontSizeOutlined } from '@ant-design/icons';

const ListBox = (props) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState();
    const [index, setIndex] = useState();

    //删除
    const clickDele = (index) => {
        props.delData(index);
    }
    //编辑，修改
    const clickEdit = (index) => {
        setVisible(true);
        setValue(props.str[index]);
        setIndex(index);
    }
    const handleOk = () =>{
        setVisible(false);
        clickDele(index);
        props.getValue(value);
       
    }
    const handleCancel = ()=>{
        setVisible(false)
    }
    //改变输入的值
    const inputChange = (e)=>{
        setValue(e.target.value)
    }
    
    return (
        <div className="listBox">
            <Modal
                title="修改"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input value={value} onChange={inputChange} />
            </Modal>
            <List
                className="listItem"
                dataSource={props.str}
                renderItem={(item, index) => (
                    <List.Item>
                        <Checkbox className="check">
                            {item}
                        </Checkbox>
                        <FontSizeOutlined className="edit" onClick={()=>{clickEdit(index)}} />
                        <CloseCircleOutlined className="delete" onClick={() => { clickDele(index) }} />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default ListBox;