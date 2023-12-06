import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetAllCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';
import MenuAdminHeader from '../Components/MenuAdminPage';

export default function Xedathue() {

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
        <MenuHeader/>
        {/* {CarContent} */}
        <div className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 mx-20 mt-5 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
            backgroundImage: `url(https://www.topgear.com/sites/default/files/2022/07/13.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'>Totoy S123a</p>
          <p><b>Hãng xe:</b> Toyota</p>
          <p><b>Số chổ:</b> 12</p>
          <p><b>Giá cho thuê:</b> 120000 VND</p>
          <p><b>Ngày thuê:</b> 7:00 12/06/2023 - 12:00 20/06/2023</p>

          <p style={{whiteSpace: 'pre-line'}}><b>Ghi chú:</b> none</p>
          <button className=' absolute right-0 bottom-0  bg-red-500 text-white w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100'>
            Hủy thuê
            <DeleteOutlined />
          </button>
        </div>
      </div> 

      <div className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 mx-20 mt-5 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
            backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/2024-bentley-continental-gt-convertible-101-644bd404dcb7e.jpg?crop=0.637xw:0.716xh;0.264xw,0.225xh&resize=768:*)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'>Yamaha S123a</p>
          <p><b>Hãng xe:</b> Yamaha</p>
          <p><b>Số chổ:</b> 6</p>
          <p><b>Giá cho thuê:</b> 60000 VND</p>
          <p><b>Ngày thuê:</b> 12:00 20/06/2023 - 12:00 30/06/2023</p>

          <p style={{whiteSpace: 'pre-line'}}><b>Ghi chú:</b> none</p>
          <button className=' absolute right-0 bottom-0  bg-red-500 text-white w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100'>
            Hủy thuê
            <DeleteOutlined />
          </button>
        </div>
      </div> 
    </div>
  )
}
