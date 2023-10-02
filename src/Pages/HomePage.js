import React, {useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import LoginForm from '../Components/LoginForm'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const navigate = useNavigate();

  let userData = localStorage.getItem("login_user");
  userData = userData && JSON.parse(userData);
  if (!userData) userData = {};

  useEffect(() => {
    if(userData.type === 'OWNER') navigate('/quanlyxe')
  }, [])

  return (
    <div>
        {<MenuHeader/>}
    </div>
  )
}
