import { Button, Checkbox, Form, Input } from "antd";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterRootUserAction } from "../Redux/Actions/ManagerAction";
import { RegisterUser } from "../Redux/Actions/AccountAction";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function RegisterRootUser() {
  const dispatch = useDispatch();

  const [dataRegister, setDataRegister] = useState({
    rootname: "",
    password: "",
    repassword: "",
    email: "",
  });

  const changeData = (e) => {
    const { value, name } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };



  const onFinish = (value) => {
    if (value.password === value.repassword){
      console.log({
        ...value,
        type: "ADMIN"
      });
      dispatch(RegisterUser({...value, type: "ADMIN"}))

    }
    else alert("Mật khẩu nhập lại không đúng!")
}

  return (
    <div>
      {/* <Form>
        <Input
          value={dataRegister.rootname}
          className="my-2"
          onChange={(e) => {
            changeData(e);
          }}
          name="rootname"
          placeholder="Nhập tên Admin"
        />
        <Input
          value={dataRegister.email}
          className="my-2"
          onChange={(e) => {
            changeData(e);
          }}
          name="email"
          placeholder="Nhập Email"
        />
        <Input
          value={dataRegister.password}
          className="my-2"
          onChange={(e) => {
            changeData(e);
          }}
          name="password"
          placeholder="Nhập Mật khẩu"
        />
        <Input
          value={dataRegister.repassword}
          className="my-2"
          onChange={(e) => {
            changeData(e);
          }}
          name="repassword"
          placeholder="Xác nhận lại mật khẩu"
        />

        <div className="flex justify-center">
          <button
            onClick={() => {
              submitButton();
            }}
            className="w-20 rounded-md my-5 py-2 bg-red-500 text-white"
          >
            REGISTER
          </button>
        </div>
      </Form> */}
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

    </Form>
    </div>
  );
}
