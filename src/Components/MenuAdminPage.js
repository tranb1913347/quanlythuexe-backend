import { Button, Popover } from "antd";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import UserButton from "./UserButton";
import { useDispatch, useSelector  } from 'react-redux'
import RegisterRootUser from "./RegisterRootUser";


export default function MenuAdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userData = localStorage.getItem("login_user");
  userData = userData && JSON.parse(userData);
  if (!userData) userData = {};

  return (
    <div>
      <div className="bg-red-400 justify-between px-20 text-white font-bold h-14 flex items-center">
        <div
          className="w-20 h-20"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/logo.png"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex items-center">
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/admin"}>
            Quản lý tài khoản
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/admin/danhsachxe"}>
            Danh sách xe
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100 border-r-2 pr-4"
            onClick={() => {
              dispatch({
                type: "SHOW_MODAL_WITH_CONTENT",
                content: <RegisterRootUser/>,
                title: "ĐĂNG KÝ ADMIN"
              })
            }}
          >
            Tạo thêm Admin
          </NavLink>
          {/* BUTTON CONTROL  */}
         
          <Popover content={<UserButton/>} placement='bottomRight' trigger={"click"} className="flex items-center hover:text-yellow-200 cursor-pointer">
            <UserOutlined className="text-2xl border rounded-full px-2 pb-2 mr-2"/>
            <div>
            <p>{userData.username}</p>
            <p className="font-thin">{userData.type}</p>
            </div>
          </Popover>
          
          

        </div>
      </div>
    </div>
  );
}
