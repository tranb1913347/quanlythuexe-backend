import React,{useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCamnang, DeleteCar, GetCarOwner } from '../Redux/Actions/ManagerAction';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined , } from "@ant-design/icons";
import { Button } from 'antd';
import AddNewCar from '../Components/AddNewCar';
import { useNavigate } from 'react-router-dom';
import EditCarForm from '../Components/EditCarForm';

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

      const editCarButton = (_item) => {
        dispatch({
          type: "SET_INIT_CONTENT",
          content: _item
        })
        dispatch({
          type: "SHOW_MODAL_WITH_CONTENT",
          title: "CHỈNH SỬA THÔNG TIN XE",
          content: <EditCarForm/>
        })
      }
  

      const deleteCamnangButton = (_id) => {
        dispatch(DeleteCar(_id, userData.id))
      }

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
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
        <div className='w-full'>
          <p className='font-bold border-b text-2xl'>{item.name  }</p>
          <p><b>Hãng xe:</b> {item.company}</p>
          <p><b>Số chổ:</b> {item.numberOfSeat}</p>
          <p><b>Giá:</b> {formatter.format(item.cost)}</p>
          <p style={{whiteSpace: 'pre-line'}}><b>Mô tả</b>: {item.description}</p>
        </div>
  
        <div className='absolute bottom-2 flex right-2'>
          <button 
          className='bg-blue-500 hover:bg-blue-400 flex items-center rounded-md md:py-2 md:px-3 p-1 mr-2 text-white'
          onClick={() => {
            editCarButton(item)
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
    <div className='pb-20'>
        <MenuHeader/>
        <h1 className='mx-20 font-bold text-3xl mt-5'>Danh sách xe:</h1>
        <div className='grid grid-cols-4 px-20 gap-6 w-full'>
        {CarContent}
        <div onClick={addNewCarButton}  className='bg-slate-50 shadow-md flex opacity-70 cursor-pointer hover:scale-105 hover:opacity-100 duration-100 items-center justify-center w-full rounded-sm py-5 px-2 relative mb-5'>
            <div className='text-xl text-center'>
            <PlusCircleOutlined className='text-5xl'/>
            <p>Thêm xe mới</p>
            </div>
        </div>
        </div>


    </div>
  )
}
