import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetAllCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined, UserOutlined,  CalendarOutlined, CarOutlined, DollarOutlined, EnvironmentOutlined, HomeOutlined, MessageOutlined, CheckCircleFilled } from "@ant-design/icons";
import { } from "@ant-design/icons";

import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';
import MenuAdminHeader from '../Components/MenuAdminPage';
import { ConfirmCheck, DeleteRental, GetAllRental } from '../Redux/Actions/RentalAction';

export default function Quanlythuexe() {

    const dispatch = useDispatch();
    const {carList} = useSelector(state => state.ManagerReducer);
  const { rentalList } = useSelector((state) => state.ManagerReducer);

    const navigate = useNavigate();
    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};
    const getCar = (id) => {
      return carList.find((car) => car.id === id);
    };
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    });
    const formatDate = (d) => {
      const date = new Date(d);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
  
      return `${hour}:${minute}:${second} ${day}/${month}/${year}`;
    };
    const RentalContent = rentalList.map((item, index) => {
      if(getCar(item.carID))
      return (
        <div className="flex bg-slate-50 shadow-md rounded-sm py-5 px-2 mx-20 mt-5 relative mb-5">
          <div
            className="w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10"
            style={{
              backgroundImage: `url(${getCar(item.carID)?.image.replaceAll(
                "\\",
                "/"
              )})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="w-96">
            <p className="font-bold border-b text-2xl">
              {getCar(item.carID)?.name}
            </p>
            <p>
              <b><UserOutlined /> Tên người thuê:</b> {item.username}
            </p>
            <p>
              <b><DollarOutlined /> Giá cho thuê:</b> {formatter.format(getCar(item.carID)?.cost)}
            </p>
            <p>
              <b><CalendarOutlined />Ngày thuê:</b> {formatDate(item.startDate)}
            </p>
            <p>
              <b><CalendarOutlined />Ngày trả:</b> {formatDate(item.endDate)}
            </p>
            <p>
              <b><EnvironmentOutlined />Địa điểm nhận xe:</b> {item.address}
            </p>
  
            <p style={{ whiteSpace: "pre-line" }}>
              <b> <MessageOutlined /> Ghi chú:</b> {item.note}
            </p>
            
            {
              (item.status === "1")?
              <div className='absolute top-0 right-0 rounded-full w-10 h-10 text-center pt-1 m-2 text-xl items-center opacity-50'>
              <DeleteOutlined/>
             </div>
              :
            <div className='absolute top-0 right-0 rounded-full w-10 h-10 text-center pt-1 m-2 text-xl items-center cursor-pointer duration-100  hover:bg-slate-300'
            onClick={() => {
            dispatch(DeleteRental(item.id))
            }}>
             <DeleteOutlined/>
            </div>

            }

            {(item.status === "1") ?  
         <button  className=" absolute right-0 bottom-0  bg-slate-200 text-green-500 w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100"
         onClick={() => {
           // dispatch(DeleteRental(item.id, userData.id))
         }}
         >
           Đã xác nhận
           <CheckCircleFilled />
         </button>
          :
          <button  className=" absolute right-0 bottom-0  bg-blue-500 text-white w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100"
          onClick={() => {
            // dispatch(DeleteRental(item.id, userData.id))
            dispatch(ConfirmCheck(item.id));
          }}
          >
            Xác nhận thuê
            <CheckCircleFilled />
          </button>
        }
          </div>
        </div>
      );
    });
  

  useEffect(() => {

        dispatch(GetCarOwner(userData.id));
        dispatch(GetAllRental());
    
}, [])

  return (
    
    <div>
        <MenuHeader/>
        {/* {CarContent} */}
        {RentalContent}
     
    </div>
  )
}
