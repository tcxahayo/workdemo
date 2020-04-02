import React from 'react';
import './login.scss';
import { Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {loginAction} from '../../store/actionCreate';

//页面布局
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = (props) => {
   const {onFinish} = props

    //提交失败
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="用户名：admin" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="密码：admin" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Link to='/' className="back">暂不登陆</Link>
                </Form.Item>

            </Form>
        </div>
    )
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        //点击提交
        onFinish: values => {
          const action = loginAction(values);
          dispatch(action);
          props.history.push('/');
        }
    }
}

export default connect(null,mapDispatchToProps)(Login);