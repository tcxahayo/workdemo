import React, { Component } from 'react';
import "./list.scss";
import { List, Modal, Input } from 'antd';
import { CloseCircleOutlined, FontSizeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteAction, valueAction, editAction, okAction } from '../../store/actionCreate';
import {bindActionCreators} from 'redux';

class ListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    //点击修改图标
    hadleEdit(index) {
        this.props.clickEdit(index);
        this.setState({
            visible: true
        })
    }
    //确定修改
    handleSubmit = ()=>{
        this.props.handleOk();
        this.setState({
            visible:false
        })
    }
    //取消修改
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    }
    //获取修改输入值
    changeValue = (e)=>{
        this.props.setValue(e.target.value);
    }
    render() {
        const { data, delData , value } = this.props;
        return (
            <div className="listBox">
                <Modal
                    title="修改"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                >
                    <Input onChange={this.changeValue} value={value} />
                </Modal>
                <List
                    className="listItem"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div className="check">
                                {item}
                            </div>
                            <FontSizeOutlined className="edit" onClick={this.hadleEdit.bind(this, index)} />
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
        setValue:bindActionCreators(valueAction,dispatch),
        clickEdit:bindActionCreators(editAction,dispatch),
        //确定修改框
        handleOk:bindActionCreators(okAction,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);