import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';

export default function Quanlyxe() {
    const dispatch = useDispatch();
    const {carList} = useSelector(state => state.ManagerReducer);
    const navigate = useNavigate();
    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};

    console.log(carList);

    const addNewCarButton = () => {
        dispatch({
          type: "SHOW_MODAL_WITH_CONTENT",
          content: <AddNewCar/>,
          title: "ĐĂNG KÝ XE MỚI"
        })
      }

      const deleteCamnangButton = (_id) => {
        dispatch(DeleteCar(_id, userData.id))
      }


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
  
        <div className='absolute bottom-2 flex right-2'>
          <button 
          className='bg-blue-500 hover:bg-blue-400 flex items-center rounded-md md:py-2 md:px-3 p-1 mr-2 text-white'
          onClick={() => {
            // editCamnangButton(item)
          }}
          >
            <EditOutlined/>
          </button>
          <button 
          className='bg-red-500 hover:bg-red-400 flex items-center rounded-md md:py-2 md:px-3 p-1 text-white'
          onClick={() => {
            deleteCamnangButton(item.id)
          }}
          >
            <DeleteOutlined/>
          </button>
        </div>
      </div> 
  })

    useEffect(() => {
        if(userData.type === "OWNER")
            dispatch(GetCarOwner(userData.id));
        else{
            navigate('/')
        }
    }, [])
  return (
    <div>
        <MenuHeader/>
        <h1 className='mx-20 font-bold text-3xl mt-5'>Danh sách xe:</h1>
        {CarContent}
        <div className='text-center'>
        <Button onClick={addNewCarButton} className='w-50 my-5 text-center bg-red-500 text-white'>Đăng ký thêm xe mới + </Button>

        </div>


    </div>
  )
}
