import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Actions/AccountAction";

export default function LoginOwnerForm() {
    const dispatch = useDispatch();

    const onFinish = (value) => {
    //   dispatch(LoginUser(value));
      // dispatch(LoginUserLocal(value))
      console.log(value);
    };
  
    const navigate = useNavigate();
  
    const MoveToRegister = () => {
      navigate('/register')
    }
  return (
    <div>
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
          <p className="ml-2">Email:</p>
        </div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Ex user@gmail.com!" />
        </Form.Item>

        <div className="font-bold flex items-center">
          <p className="ml-2">Mật khẩu:</p>
        </div>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Please type your password!" />
        </Form.Item>

        <Form.Item label="" className="text-center">
          <Button htmlType="submit" className="w-1/2 mt-5">
            Đăng nhập
          </Button>
        </Form.Item>
        <div className="text-center">
          <p>Bạn chưa có tài khoản chủ xe?</p>
          <p onClick={MoveToRegister} className="text-blue-600 hover:text-blue-300 cursor-pointer">
            Đăng kí ngay
          </p>
        </div>
      </Form>
    </div>
  )
}
