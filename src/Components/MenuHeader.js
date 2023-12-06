import { Button, Popover } from "antd";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import UserButton from "./UserButton";


export default function MenuHeader() {
  const navigate = useNavigate();
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
          {
            (userData.type === 'USER' || !userData.username) ?
          
          <div>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/"}>
            Trang chủ
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/danhsachxe"}>
            Danh sách xe
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/xedathue"}>
            Xe đã thuê
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100 border-r-2 pr-4" to={"/registerowner"}>
            Trở thành chủ xe?
          </NavLink>
          </div>
          :
          <div>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/quanlyxe"}>
            Quản lý xe
          </NavLink>
          <NavLink className="mx-4 hover:text-yellow-300 duration-100" to={"/quanlythuexe"}>
            Quản lý dịch vụ thuê
          </NavLink>
          </div>
          }
          {/* BUTTON CONTROL  */}
          {(!userData.username) ? 
          
          <div>
            <NavLink className="mx-2" to={"/login"}>
            <button className="bg-blue-400 duration-100 hover:scale-110 p-2 rounded-xl">Đăng nhập</button>
          </NavLink>
          <NavLink className="mx-2" to={"/register"}>
            <button className="bg-white p-2 duration-100 hover:scale-110 text-red-500 rounded-xl">Đăng kí</button>
          </NavLink> 
          </div>
          :
          <Popover content={<UserButton/>} placement='bottomRight' trigger={"click"} className="flex items-center hover:text-yellow-200 cursor-pointer">
            <UserOutlined className="text-2xl border rounded-full px-2 pb-2 mr-2"/>
            <div>
            <p>{userData.username}</p>
            <p className="font-thin">{userData.type}</p>
            </div>
          </Popover>
          
          }

        </div>
      </div>
    </div>
  );
}
