import React, { Component } from 'react';
import "./list.scss";
import { List, Modal, Input } from 'antd';
import { CloseCircleOutlined, FontSizeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteAction, valueAction, editAction, okAction , cancelAction} from '../../store/actionCreate';
import {bindActionCreators} from 'redux';

class ListBox extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { data, delData , value , valueAction, visible, handleCancel, clickEdit, handleOk} = this.props;
        return (
            <div className="listBox">
                <Modal
                    title="修改"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Input onChange={valueAction} value={value} />
                </Modal>
                <List
                    className="listItem"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div className="check">
                                {item}
                            </div>
                            <FontSizeOutlined className="edit" onClick={clickEdit.bind(this, index)} />
                            <CloseCircleOutlined className="delete" onClick={delData.bind(this, index)} />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        value: state.value,
        visible: state.visible
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //删除数据
        delData:bindActionCreators(deleteAction,dispatch),
        //获取输入框的值
        valueAction:bindActionCreators(valueAction,dispatch),
        //点击修改图标
        clickEdit:bindActionCreators(editAction,dispatch),
        //确定修改框
        handleOk:bindActionCreators(okAction,dispatch),
        //取消修改
        handleCancel:bindActionCreators(cancelAction,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);