import React from "react";
import LoginForm from "../Components/LoginForm";
import { RegisterUser } from "../Redux/Actions/AccountAction";
import RegisterForm from "../Components/RegisterForm";
import BackToHome from "../Components/BackToHome";
import RegisterOwnerForm from "../Components/RegisterOwnerForm";

export default function RegisterOwnerPage() {
  return (
    <div className="flex justify-center h-screen pt-2" style={{
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/bg.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
    }}>
      <BackToHome/>
      <div className="w-80 pb-4 h-fit  px-5 bg-white rounded-lg" 
      style={{
        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
      }}>
        <div className="text-center">
          <div
            className="w-20 h-20 border-b inline-block"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/logo-black.png"
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="font-bold text-2xl">Đăng kí</h1>
          <p>Chủ xe</p>
        </div>
        {<RegisterOwnerForm />}
      </div>
    </div>
  )
}
