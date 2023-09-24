import React from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LoginUser, RegisterUser } from "../Redux/Actions/AccountAction";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
export default function RegisterForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const MoveToLogin = () => {
      navigate('/login')
    }

    const onFinish = (value) => {
        if (value.password === value.repassword){
            // console.log(value)
            // dispatch(RegisterLocal(value, MoveToLogin))
            dispatch(RegisterUser(value, MoveToLogin))
        }
        else alert("Mật khẩu nhập lại không đúng!")
    }

  return (
    <div className="relative z-20">
    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="font-bold flex items-center">
        <UserOutlined />
        <p className="ml-2">Username:</p>
      </div>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input placeholder="Ex user@gmail.com!" />
      </Form.Item>

      <div className="font-bold flex items-center">
        <MailOutlined />
        <p className="ml-2">Email:</p>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input placeholder="Ex man@gmail.com!" />
      </Form.Item>

      <div className="font-bold flex items-center">
        <PhoneOutlined />
        <p className="ml-2">Phone:</p>
      </div>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            // type: 'number',
            message: "Please input your phone number!",
          },
        ]}
      >
    <Input placeholder="Please type your phone numbers!" />
      </Form.Item>

      <div className="font-bold flex items-center">
        <LockOutlined />
        <p className="ml-2">Password:</p>
      </div>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Please type your password!" />
      </Form.Item>

      <div className="font-bold flex items-center">
        <LockOutlined />
        <p className="ml-2">Retype Password:</p>
      </div>
      <Form.Item
        name="repassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Please retype your password!" />
      </Form.Item>

      <Form.Item label="" className="text-center">
        <Button htmlType="submit" className="w-1/2">
          Đăng kí
        </Button>
      </Form.Item>

      <div className="text-center">
        <p >Bạn đã có tài khoản?</p>
        <p className="text-blue-600 hover:text-blue-300 cursor-pointer"
          onClick={MoveToLogin}
        >Đằng nhập ngay</p>
        </div>
    </Form>
  </div>
  )
}
