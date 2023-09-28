import React from 'react'
import { ImportOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';


export default function UserButton() {

    const navigate = useNavigate();


  return (
    <div className='font-bold'>
        <div className='w-40 hover:bg-slate-200 flex items-center py-2 px-2 cursor-pointer duration-100 border-b'
        onClick={() => {
          navigate('/profile')
        }}
        
        >
            <UserOutlined/>
            <p className='ml-2'>Profile</p>
        </div>
        <div  className='w-40 bg-red-500 flex items-center text-white hover:bg-red-400 py-2 px-2 cursor-pointer duration-100 border-b'
        onClick={() => {
            localStorage.removeItem("login_user");
            window.location.reload()
        }}
        >
            <ImportOutlined/>
            <p className='ml-2'>Logout</p>
        </div>
    </div>
  )
}
