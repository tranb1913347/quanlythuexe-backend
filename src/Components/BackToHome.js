import React from 'react'
import { useNavigate, NavLink } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className='fixed top-0 left-5 font-bold text-white'>
        <NavLink className="mx-4" to={"/"}>
            <div className='bg-slate-600 p-2 rounded-md bg-opacity-40'>
            Quay lại trang chủ
            </div>
        </NavLink>
       
    </div>
  )
}
