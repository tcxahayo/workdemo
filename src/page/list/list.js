import React, { Component } from 'react';
import "./list.scss";
import { List, Modal, Input } from 'antd';
import { CloseCircleOutlined, FontSizeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteAction, valueAction, editAction, okAction } from '../../store/actionCreate';

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
    render() {
        const { data, delData , value, setValue } = this.props;
        return (
            <div className="listBox">
                <Modal
                    title="修改"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                >
                    <Input onChange={setValue} value={value} />
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
        delData: (index) => {
            const action = deleteAction(index);
            dispatch(action);
        },
        //获取输入框的值
        setValue: (e) => {
            const action = valueAction(e.target.value);
            dispatch(action);
        },
        //点击修改
        clickEdit: (index) => {
            const action = editAction(index);
            dispatch(action);
        },
        //修改框
        handleOk: () => {
            const action = okAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);