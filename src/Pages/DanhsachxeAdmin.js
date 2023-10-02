import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetAllCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';
import MenuAdminHeader from '../Components/MenuAdminPage';

export default function DanhsachxeAdmin() {

    const dispatch = useDispatch();
    const {carList} = useSelector(state => state.ManagerReducer);
    const navigate = useNavigate();
    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};


    const CarContent = carList.map((item, index) => {
        return  <div key={index} className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 mx-20 mt-5 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
            backgroundImage: `url(${item.image?.replaceAll(
                "\\",
                "/"
              )})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'>{item.name  }</p>
          <p>Hãng xe: {item.company}</p>
          <p>Số chổ: {item.numberOfSeat}</p>
          <p>Giá cho thuê: {item.cost} VND</p>
          <p style={{whiteSpace: 'pre-line'}}>Mô tả: {item.description}</p>
        </div>
  
      </div> 
  })

  useEffect(() => {

        dispatch(GetAllCar());
    
}, [])

  return (
    
    <div>
        <MenuAdminHeader/>
        {CarContent}
    </div>
  )
}
