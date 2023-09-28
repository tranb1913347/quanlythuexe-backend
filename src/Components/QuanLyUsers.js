import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { DeleteUserById, GetUserList } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import EditMenuForm from '../Components/EditMenuForm';
import EditUserForm from '../Components/EditUserForm';

export default function QuanLyUsers() {

    const dispatch = useDispatch();
    const {userList} = useSelector(state => state.ManagerReducer);
    console.log(userList)

    const deleteUserButton = (_id) => {
      dispatch(DeleteUserById(_id));
    }

    const editUserButton = (data) => {

        dispatch({
            type: "SET_INIT_CONTENT",
            content: data
        })

      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        content: <EditUserForm/>,
        title: "CHỈNH SỬA THÔNG TIN USER"

      })
    }
    const UsersContent = userList.map((item, index) => {
        return  <div key={index} className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
          backgroundImage: `url(${item.avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b'>{item.username}</p>
         <p>{item.email}</p>
         <p>{item.phone}</p>
         <p>{item.address}</p>
         <p className='font-bold'>{item.type}</p>
        </div>
  
        <div className='absolute bottom-2 flex right-2'>
          <button 
          className='bg-blue-500 hover:bg-blue-400 flex items-center rounded-md md:py-2 md:px-3 p-1 mr-2 text-white'
          onClick={() => {
            editUserButton(item)
          }}
          >
            <EditOutlined/>
          </button>
          <button 
          className='bg-red-500 hover:bg-red-400 flex items-center rounded-md md:py-2 md:px-3 p-1 text-white'
          onClick={() => {
            deleteUserButton(item.id)
          }}
          >
            <DeleteOutlined/>
          </button>
        </div>
      </div> 
  })


    useEffect(() => {
        dispatch(GetUserList())
    }, [])
    
  return (
    <div>

        <h1 className='text-2xl border-b font-bold'>QUẢN LÝ USERS</h1> 

        {UsersContent}

        

    </div>
  )
}
