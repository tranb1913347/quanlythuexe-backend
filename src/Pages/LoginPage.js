import React, {useEffect} from "react";
import LoginForm from "../Components/LoginForm";
import BackToHome from "../Components/BackToHome";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const {isLogin} = useSelector(state => state.AccountReducer)
  const navigate = useNavigate();

  console.log(isLogin);

  useEffect(() => {
    if(isLogin)
      navigate('/');
  }, [isLogin])

  return (
    <div className="flex justify-center h-screen pt-16" style={{
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/bg.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
    }}>
        <BackToHome/>

      <div className="w-80 pb-20 h-fit pt-2 px-5 bg-white rounded-lg" 
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
          <h1 className="font-bold text-2xl">Đăng nhập</h1>
        </div>
        {<LoginForm />}
      </div>
    </div>
  );
}
