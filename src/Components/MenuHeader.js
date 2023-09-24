import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";


export default function MenuHeader() {
  const navigate = useNavigate();

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
        <div>
          <NavLink className="mx-4" to={"/"}>
            Trang chủ
          </NavLink>
          <NavLink className="mx-4 border-r-2 pr-4" to={"/"}>
            Giới thiệu
          </NavLink>
          {/* BUTTON CONTROL  */}
          <NavLink className="mx-2" to={"/login"}>
            <button className="bg-blue-400 duration-100 hover:scale-110 p-2 rounded-xl">Đăng nhập</button>
          </NavLink>
          <NavLink className="mx-2" to={"/"}>
            <button className="bg-white p-2 duration-100 hover:scale-110 text-red-500 rounded-xl">Đăng kí</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
