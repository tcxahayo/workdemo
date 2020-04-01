import React from 'react';
import './login.scss';
import { Form, Input, Button , message} from 'antd';
import { Link, useHistory  } from "react-router-dom";

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

const Login = () => {

    let history = useHistory();

//点击提交
    const onFinish = values => {
        console.log('Success:', values);
        if(values.username === 'admin' && values.password === 'admin'){
            history.push('/')
        }else{
            message.error('密码或用户名错误',1)
        }
    };

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
export default Login;