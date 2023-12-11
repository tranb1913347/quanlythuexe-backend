import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetAllCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../Components/Search';
import EditCarForm from '../Components/EditCarForm';
import ThuexeForm from '../Components/ThuexeForm';

export default function Danhsachxe() {

    const dispatch = useDispatch();
    const {carList} = useSelector(state => state.ManagerReducer);
    const navigate = useNavigate();

    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};

    const editCarButton = (_item) => {
      dispatch({
        type: "SET_INIT_CONTENT",
        content: _item
      })
      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        title: "THUÊ XE",
        content: <ThuexeForm/>
      })
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
    });

    const CarContent = carList.map((item, index) => {
        return  <div key={index} className='bg-blue-50 shadow-md w-full rounded-sm py-5 px-2 relative'>
        <div className='w-full rounded-md overflow-hidden h-56 mr-10'
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
          <p>Giá cho thuê: {formatter.format(item.cost)}</p>
          <p style={{whiteSpace: 'pre-line'}}>Mô tả: {item.description}</p>
          <button onClick={() => {
            if(userData.id)
            editCarButton(item)
            else alert("Vui lòng đăng nhập!")
          }} className='bg-red-500 text-white w-40 rounded-md p-2 ml-20 mt-5 shadow-lg hover:scale-110 duration-100'>Thuê ngay!</button>
        </div>
  
      </div> 
  })

  useEffect(() => {

        dispatch(GetAllCar());
    
}, [])

  return (
    
    <div className='pb-20'>
        <MenuHeader/>
        <SearchButton/>
        <div className='grid mt-5 grid-cols-4 px-20 gap-6 w-full'>
        {CarContent}
        </div>
    </div>
  )
}
