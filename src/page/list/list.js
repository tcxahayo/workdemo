import React from 'react';
import "./list.scss";
import { List , Modal, Input } from 'antd';
import { CloseCircleOutlined, FontSizeOutlined } from '@ant-design/icons';

const ListBox = (props) => {
    return (
        <div className="listBox">
            <Modal
                title="修改"
                visible={props.visible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
            >
                <Input onChange={props.changeValue} value={props.editValue} />
            </Modal>
            <List
                className="listItem"
                dataSource={props.str}
                renderItem={(item, index) => (
                    <List.Item>
                        <div className="check">
                            {item}
                        </div>
                        <FontSizeOutlined className="edit" onClick={()=>{props.clickEdit(index)}} />
                        <CloseCircleOutlined className="delete" onClick={()=>{props.delData(index)}} />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default ListBox;