import { Input } from 'antd'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { LoginRootUser } from '../Redux/Actions/ManagerAction';

export default function LoginRootForm() {

    const dispatch = useDispatch();

    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    })

    const changeDataLogin = (e) => {
      const {value, name} = e.target;
        setDataLogin({
            ...dataLogin,
            [name]: value
        })

    }

    const loginButton = () => {
      dispatch(LoginRootUser(dataLogin))
    }

  return (
    <div>
        <Input className='my-2' onChange={(e) => {
          changeDataLogin(e)
        }} name='email' placeholder='Type rootname'/>
        <Input className='my-2' onChange={(e) => {
          changeDataLogin(e)
        }} name='password' placeholder='Type password'/>
        <div className='flex justify-center'>
        <button onClick={() => {
          loginButton()
        }} className='w-20 rounded-md my-5 py-2 bg-red-500 text-white'>LOGIN</button>
        </div>
    </div>
  )
}
