import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import React from 'react'
import { AddNewMenu, UpdateCar, UpdateMenu } from '../Redux/Actions/ManagerAction'
import { DatePicker, Space } from 'antd';
import { CreateNewRental } from '../Redux/Actions/RentalAction'

const { RangePicker } = DatePicker;

export default function ThuexeForm() {

    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};

    const dispatch = useDispatch();

    const {initContent} = useSelector(state => state.ManagerReducer);

    const [selectedImage, setSelectedImage] = useState();
    const [dataContent, setDataContent] = useState({
       userID: "",
       carID: "",
       note: "",
       address: "",
       startDate: "",
       endDate: "",
       status: true,
       username: ''
    })



    const updateImageSelected = (event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
    }


    const getDataContent = (e) => {
        setDataContent({
            ...dataContent,
            [e.target.name]: e.target.value
        })
    }

    const getDate = (date, dateString) => {
      setDataContent({
        ...dataContent,
        startDate: dateString[0],
        endDate: dateString[1],
      })
      console.log(dataContent);
    }
    const submitButton = () => {
      // dispatch(UpdateCar(
      //   {
      //       name: dataContent.name,
      //       company: dataContent.company,
      //       numberOfSeat: dataContent.numberOfSeat,
      //       cost: dataContent.cost,
      //       description: dataContent.description,
      //   },
      //   initContent.id,
      //   selectedImage
      // ))
      // setSelectedImage()
      dispatch(CreateNewRental(dataContent))
      console.log(dataContent);
    }

    useEffect(() => {
        setDataContent({
          ...dataContent,
            carID: initContent.id,
            cost: initContent.cost,
            userID: userData.id,
            username: userData.username,
            status: false
        })
    }, [initContent])
    
    
  return (
    <div className='w-full'>
        <div className='w-full'>
            <div className='mb-2 rounded-md overflow-hidden' >
                <div className='w-full relative mr-2 h-80 bg-slate-200'
                style={{
                    backgroundImage: `${(selectedImage ? 
                        `url(${URL.createObjectURL(selectedImage)})` : 
                        `url(${initContent.image?.replaceAll(
                            "\\",
                            "/"
                          )})`
                        )}`,

                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                >
                </div>
                <input 
                accept="image/png, image/jpeg, image/jpg" 
                id='upload-img' 
                className='hidden' 
                name="myImage"
                type={'file'}
                onChange={updateImageSelected}/>
               
            </div>
            <div>
            <p><b>Thời gian thuê xe:</b> </p>
            <RangePicker className='w-full'onChange={(date, datestring) => {
              getDate(date, datestring)
            }} showTime /> 

            <p><b>Địa chỉ thuê:</b> </p>
            <Input onChange={getDataContent} name='address' type="text" value={dataContent.address} className='mb-2' placeholder='Nhập địa chỉ'></Input>
            <p><b>Ghi chú:</b> </p>
            <Input onChange={getDataContent} name='note' type="text" value={dataContent.note} className='mb-2' placeholder='Nhập ghi chú'></Input>
         </div>
        </div>
        <div className='flex justify-center'>
        <button onClick={() => {
          submitButton()
        }} className=' px-2 rounded-md my-5 py-2 bg-red-500 text-white'>ĐĂNG KÍ THUÊ</button>
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
