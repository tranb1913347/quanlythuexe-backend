import React, { useEffect } from "react";
import MenuHeader from "../Components/MenuHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCamnang,
  DeleteCar,
  GetAllCar,
  GetCarOwner,
} from "../Redux/Actions/ManagerAction";
import { CalendarOutlined, CarOutlined, DeleteOutlined, DollarOutlined, EditOutlined, EnvironmentOutlined, ExclamationCircleFilled, ExclamationCircleOutlined, HomeOutlined, MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import AddNewCar from "../Components/AddNewCar";
import { useNavigate } from "react-router-dom";
import MenuAdminHeader from "../Components/MenuAdminPage";
import { DeleteRental, GetRentalByUserID } from "../Redux/Actions/RentalAction";

export default function Xedathue() {
  const dispatch = useDispatch();
  const { carList } = useSelector((state) => state.ManagerReducer);
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

  console.log(rentalList);
  const RentalContent = rentalList.map((item, index) => {
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
            <b> <HomeOutlined /> Hãng xe:</b> {getCar(item.carID)?.company}
          </p>
          <p>
            <b><CarOutlined /> Số chổ:</b> {getCar(item.carID)?.numberOfSeat}
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
          <button  className=" absolute right-0 bottom-0  bg-red-500 text-white w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100"
          onClick={() => {
            dispatch(DeleteRental(item.id, userData.id))
          }}
          >
            Hủy thuê
            <DeleteOutlined />
          </button>
          {(item.status === "1") ?  
          <p className="text-green-400 font-bold">
          <i>Đơn thuê đã được xác nhận bởi chủ xe <ExclamationCircleFilled /></i>
          </p>
          :
          <p className="text-red-700 font-bold">
            <i>Đơn thuê chưa được xác nhận bởi chủ xe <ExclamationCircleFilled /></i>
          </p>
        }
         
        </div>
      </div>
    );
  });

  useEffect(() => {
    dispatch(GetRentalByUserID(userData?.id));
    dispatch(GetAllCar());
  }, []);

  return (
    <div>
      <MenuHeader />
      {RentalContent}
    </div>
  );
}
