import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import React from 'react'
import { UpdateUser } from '../Redux/Actions/ManagerAction';

export default function EditUserForm() {

    const dispatch = useDispatch();
    const {initContent} = useSelector(state => state.ManagerReducer);

    const [userDataInit, setUserDataInit] = useState({
        username: "",
        phone: "",
        address: ""
    })

    const changeUserData = (e) => {
      let {value, name} = e.target;
      setUserDataInit({
        ...userDataInit,
        [name]: value
      })
    }

    const submitButton = () => {
      dispatch(UpdateUser(initContent.id, userDataInit))
    }

    useEffect(() => {
      setUserDataInit({
        username: initContent.username,
        phone: initContent.phone,
        address: initContent.address
      })
    }, [initContent])
  return (
    <div>
        <Input className='my-2' onChange={(e) => {
          changeUserData(e)
        }} name='username' value={userDataInit.username} placeholder='username'/>
        <Input className='my-2' onChange={(e) => {
          changeUserData(e)
        }} name='phone' value={userDataInit.phone} placeholder='phone'/>
        <Input className='my-2' onChange={(e) => {
          changeUserData(e)
        }} name='address' value={userDataInit.address} placeholder='address'/>
        <div className='flex justify-center'>
        <button onClick={() => {
          submitButton()
        }} className='w-20 rounded-md my-5 py-2 bg-red-500 text-white'>UPDATE</button>
        <button 
        className='w-20 rounded-md my-5 ml-2 py-2 bg-blue-500 text-white'
        onClick={() => {
          dispatch({type: "CLOSE_MODAL"})
        }}
        >CANCEL</button>
        </div>
    </div>
  )
}
