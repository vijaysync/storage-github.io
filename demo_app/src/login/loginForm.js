import { Button, Input } from 'antd';
import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';

export const LoginForm = ({ status }) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const { Item } = Form;
    const [form] = Form.useForm();
    const [{ openPopup }, setPopup] = useState({
        openPopup: false
    });
    const dispatch = useDispatch();

    useEffect(() => {
        form.resetFields();
    }, [status]);

    const handleValidate = (rules, value, callback) => {
        switch (rules.field) {
            case 'name':
                if (!value) {
                    callback('Please Enter Valid Username');
                }
                else if (value.length > 20) {
                    callback('Username should be less than 32 characters');
                }
                else {
                    callback();
                }
                return;
            case 'password':
                if (!value) {
                    callback('Please Enter Valid Password');
                }
                else if (value.length > 20 || value.length < 8) {
                    callback('Password length should be greater than 8 and less than 32');
                }
                else if (!(/[A-Z]/.test(value) && /[a-z]/.test(value) && /\W/.test(value) && /[0-9]/.test(value) && !(/\s/.test(value)))) {
                    callback("Password Should contain atleast one special character, one digit, Uppercase, lowercase");
                }
                else {
                    callback();
                }
                return;
            case 'confirm_password':
                if (form.getFieldValue('password') !== value) {
                    callback('Confirm password mismatch password')
                }
                else {
                    callback();
                }
                return;
            default:
                callback();
                return;
        }

    }

    const handleSubmit = (e) => {
        dispatch({ type: 'token_api', payload: e });
    }

    const handleOk = () => {
        setPopup(state => ({
            ...state,
            openPopup: false
        }))
    };

    return (
        <div className="form_align">
            <h1 className="login_style">
                {!status ? 'Sign in to Storage Bucket' : 'Create Account'}
            </h1>
            <Form {...layout} onFinish={handleSubmit} autoComplete="off" form={form}>
                <Item
                    label="UserName"
                    name="name"
                    rules={[{
                        required: true,
                        validator: (rule, value, callback) => handleValidate(rule, value, callback)
                    }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Item>
                <Item
                    label="Password"
                    name="password"
                    rules={[{
                        required: true,
                        validator: (rule, value, callback) => handleValidate(rule, value, callback)
                    }]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Item>
                {
                    status ? (
                        <Item
                            label="Confirm Password"
                            name="confirm_password"
                            rules={[{
                                required: true,
                                validator: (rule, value, callback) => handleValidate(rule, value, callback)
                            }]}
                        >
                            <Input.Password autoComplete="off" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
                        </Item>
                    ) : (
                            <Item {...tailLayout}>
                                <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setPopup(state => ({ ...state, openPopup: true }))}>
                                    Forgot Password ?
                                </span>
                            </Item>
                        )
                }
                <Item {...tailLayout}>
                    <Button htmlType="submit" type="primary" className="but_style" style={{ width: "40%" }}>
                        {!status ? 'login' : 'signup'}
                    </Button>
                </Item>
            </Form>
            {
                !status && openPopup && (
                    <Modal
                        visible={openPopup}
                        onOk={handleOk}
                        onCancel={() => setPopup(state => ({ ...state, openPopup: false }))}

                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="UserName"
                            style={{ marginTop: "10%" }}
                        />
                    </Modal>
                )
            }
        </div>
    )
}